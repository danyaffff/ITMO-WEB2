import { Controller, Get, Render, UseInterceptors } from '@nestjs/common';
import { LoggingInterceptor } from '../app.interceptor';

@UseInterceptors(new LoggingInterceptor())
@Controller()
export class IndexController {
  @Get()
  @Render('index')
  getIndex() {
    return;
  }
}
