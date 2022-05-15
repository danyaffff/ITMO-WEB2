import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Render } from '@nestjs/common';

@ApiTags('Chat')
@Controller()
export class ChatController {
  @ApiOperation({
    summary: 'Enter chat',
    description: 'do it at your own risk!'
  })
  @Get('chat')
  @Render('chat')
  showChat() {
    return;
  }
}
