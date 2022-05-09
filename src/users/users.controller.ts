import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Render, UseInterceptors } from '@nestjs/common';
import { LoggingInterceptor } from '../app.interceptor';

@ApiTags('Users')
@UseInterceptors(new LoggingInterceptor())
@Controller()
export class UsersController {
  @ApiOperation({
    summary: 'Get page where you can load users',
  })
  @ApiResponse({
    status: 200,
    description: 'OK',
  })
  @Get('users')
  @Render('users')
  showUsers() {
    return;
  }
}