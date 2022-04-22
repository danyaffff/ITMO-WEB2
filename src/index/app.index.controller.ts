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

@UseInterceptors(new LoggingInterceptor())
@Controller()
export class IndexController {
  @Get()
  @Render('index')
  getIndex() {
    return;
  }
  @Get('authy')
  getIndexWithAuth(
    @Res() response: Response,
    @Query('logged', ParseBoolPipe) logged: boolean,
  ) {
    console.log(logged);
    return response.render('index', { logged: logged });
  }
  @Get('todo')
  @Render('todo')
  getTodo() {
    return;
  }
  @Get('users')
  @Render('users')
  getUsers() {
    return;
  }
}
