import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  ParseBoolPipe,
  Post,
  Query,
  Res,
  UseInterceptors,
} from '@nestjs/common';
import { Response } from 'express';
import { LoggingInterceptor } from '../app.interceptor';
import {
  ApiBody,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { MeService } from './me.service';
import { WorkPlaceDto } from './workplace.dto';

@ApiTags('Me')
@UseInterceptors(new LoggingInterceptor())
@Controller()
export class MeController {
  constructor(private meService: MeService) {}
  //  -----------------------------== me ==------------------------------------------
  @ApiOperation({
    summary: 'Get page about Danya',
  })
  @ApiResponse({
    status: 200,
    description: 'OK',
  })
  @ApiQuery({
    name: 'logged',
    type: 'boolean',
    required: false, // Не работает
  })
  @Get('me')
  showMe(
    @Res() response: Response,
    @Query('logged', ParseBoolPipe) logged = false,
  ) {
    this.meService
      .getWorkplaces()
      .then((workplaces) => {
        console.log(workplaces);
        return workplaces;
      })
      .then((workplaces) => {
        console.log('workplaces:', workplaces);
        console.log('is logged:', logged);
        response.render('index', { workplaces: workplaces, logged: logged });
      });
  }
  // ---------------------------------------------------------------------------------
  @ApiOperation({
    summary: 'Create new WorkPlace',
  })
  @ApiResponse({
    status: 201,
    description: 'Created successfully',
  })
  @ApiBody({
    type: WorkPlaceDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request',
  })
  @Post('workplace')
  createWorkplace(@Body() workplace: WorkPlaceDto) {
    this.meService.addWorkplace(workplace);
  }
  // ---------------------------------------------------------------------------------
  @ApiOperation({
    summary: 'Delete an existing WorkPlace',
  })
  @ApiResponse({
    status: 200,
    description: 'Deleted',
  })
  @ApiQuery({
    name: 'name',
    type: 'string',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request',
  })
  @Delete('workplace')
  deleteWorkplace(@Query('name') name: string) {
    if (name != null) {
      this.meService.deleteWorkplace(name);
    } else {
      throw new HttpException('name is incorrect', HttpStatus.BAD_REQUEST);
    }
  }
}
