import {
  Controller,
  Get,
  ParseBoolPipe,
  Query,
  Render,
  Res,
  UseInterceptors,
} from '@nestjs/common';
import { Response } from 'express';
import { LoggingInterceptor } from '../app.interceptor';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Index')
@UseInterceptors(new LoggingInterceptor())
@Controller()
export class IndexController {
  @ApiOperation({
    summary: 'Get index.hbs',
  })
  @ApiResponse({
    status: 200,
    description: 'OK',
  })
  @Get()
  @Render('index')
  getIndex() {
    return;
  }
  // Разрыв
  @ApiOperation({
    summary: 'Get index.hbs with authentication state',
  })
  @ApiResponse({
    status: 200,
    description: 'OK',
  })
  @ApiResponse({
    status: 400,
    description: 'Почему-то не работает :(',
  })
  @ApiParam({
    name: 'logged',
    type: 'boolean',  // Это почему-то не работает
  })
  @Get('authy')
  getIndexWithAuth(
    @Res() response: Response,
    @Query('logged', ParseBoolPipe) logged: boolean,
  ) {
    console.log(logged);
    return response.render('index', { logged: logged });
  }
  // Разрыв
  @ApiOperation({
    summary: 'Get page where you can create TODO notes',
  })
  @ApiResponse({
    status: 200,
    description: 'OK',
  })
  @Get('todo')
  @Render('todo')
  getTodo() {
    return;
  }
  // Разрыв
  @ApiOperation({
    summary: 'Get page where you can load users',
  })
  @ApiResponse({
    status: 200,
    description: 'OK',
  })
  @Get('users')
  @Render('users')
  getUsers() {
    return;
  }
}
