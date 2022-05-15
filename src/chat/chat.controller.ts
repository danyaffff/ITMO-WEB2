import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Render } from '@nestjs/common';

@ApiTags('Chat')
@Controller()
export class ChatController {
  @Get('chat')
  @Render('chat')
  showChat() {
    return;
  }
}
