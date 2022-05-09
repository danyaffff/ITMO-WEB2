import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Render, UseInterceptors } from '@nestjs/common';
import { LoggingInterceptor } from '../app.interceptor';

@ApiTags('ToDo')
@UseInterceptors(new LoggingInterceptor())
@Controller()
export class TodoController {
  @ApiOperation({
    summary: 'Get page where you can create TODO notes',
  })
  @ApiResponse({
    status: 200,
    description: 'OK',
  })
  @Get('todo')
  @Render('todo')
  showTodo() {
    return;
  }
}
