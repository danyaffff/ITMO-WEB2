import { Controller, Get, Render, UseInterceptors } from '@nestjs/common';
import { LoggingInterceptor } from '../app.interceptor';

@UseInterceptors(new LoggingInterceptor())
@Controller()
export class IndexController {
  @Get('index')
  @Render('index')
  getIndex() {
    return;
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
