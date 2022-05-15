import { ApiBody, ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  BadRequestException,
  Body,
  Controller,
  Delete, ForbiddenException,
  Get,
  ParseIntPipe,
  Post,
  Query, Req,
  Res, UseGuards,
  UseInterceptors
} from '@nestjs/common';
import { LoggingInterceptor } from '../app.interceptor';
import { AuthService } from './auth.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Response, Request } from 'express';
import { UserDto } from './user.dto';
import { RolesGuard } from './roles.guard';
import { Roles } from './roles.decorator';

@ApiTags('Auth')
@UseInterceptors(new LoggingInterceptor())
//@UseGuards(RolesGuard)
@Controller('auth')
export class AuthController {

  constructor(
    private authService: AuthService,
    private jwtService: JwtService
  ) {}

  @ApiOperation({
    summary: 'Get all users stored in DataBase',
  })
  @ApiResponse({
    status: 200,
    description: 'Users provided',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request',
  })
  @ApiResponse({
    status: 403,
    description: 'Not admin',
  })
  @Get('users')
  //@Roles('admin')
  async users(@Req() request: Request) {
    const jwt = request.cookies['jwt'];
    const role = (await this.jwtService.verifyAsync(jwt))['role'];
    if (role == 'admin') {
      return this.authService.users();
    } else {
      throw new ForbiddenException('Only admin can call this method')
    }
  }

  @ApiOperation({
    summary: 'Get user token information by token stored in cookies',
  })
  @ApiResponse({
    status: 200,
    description: 'Information provided',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request',
  })
  @Get('user')
  async user(@Req() request: Request) {
    const jwt = request.cookies['jwt'];
    return await this.jwtService.verifyAsync(jwt);
  }

  @ApiOperation({
    summary: 'Found user from database and return if needed',
  })
  @ApiBody({
    type: UserDto
  })
  @ApiResponse({
    status: 200,
    description: 'User logged in',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request',
  })
  @Post('login')
  async login(
    @Body() user: UserDto,
    @Res({ passthrough: true }) response: Response
  ) {
    let loggedUser = await this.authService.login(user.email);

    if (!loggedUser || !await bcrypt.compare(user.password, loggedUser.password)) {
      throw new BadRequestException('Invalid credentials');
    }

    const jwt = await this.jwtService.signAsync({ id: loggedUser.id, role: loggedUser.role });

    response.cookie('jwt', jwt, { httpOnly: true });

    return {
      message: 'User successfully login',
      user: user,
      jwt: jwt
    };
  }

  @ApiOperation({
    summary: 'Register user and add it to DataBase',
  })
  @ApiBody({
    type: UserDto
  })
  @ApiResponse({
    status: 200,
    description: 'User created',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request',
  })
  @Post('register')
  async register(@Body() user: UserDto) {
    if (await this.authService.login(user.email)) {
      throw new BadRequestException('User already exists');
    }

    return {
      message: 'User successfully registered',
      user: await this.authService.register(user.email, user.password)
    }
  }

  @ApiOperation({
    summary: 'Delete user from DataBase',
  })
  @ApiQuery({
    name: 'id',
    type: 'number',
  })
  @ApiResponse({
    status: 200,
    description: 'Deleted',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request',
  })
  @Delete('user')
  async delete(@Query('id', ParseIntPipe) id: number) {
    return {
      message: 'User successfully deleted',
      user: await this.authService.delete(id)
    };
  }
}