import {
  Controller,
  Delete,
  Get,
  NotImplementedException,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { MeService } from './me.service';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Me')
@Controller('me')
export class MeController {
  constructor(private meService: MeService) {}

  @ApiOperation({
    summary: 'Get information about me',
  })
  @ApiResponse({
    status: 501,
    description: 'Not implemented',
  })
  @Get()
  public getMeInformation() {
    throw new NotImplementedException();
  }
  // Чисто коммент для разрыва
  @ApiOperation({
    summary: 'Add a new information',
  })
  @ApiResponse({
    status: 501,
    description: 'Not implemented',
  })
  @Post()
  public addInformation() {
    throw new NotImplementedException();
  }
  // Чисто коммент для разрыва
  @ApiOperation({
    summary: 'Delete information by id',
  })
  @ApiResponse({
    status: 501,
    description: 'Not implemented',
  })
  @ApiParam({
    name: 'id',
    type: 'int',
  })
  @Delete()
  public delete(@Query('id', ParseIntPipe) id: number) {
    throw new NotImplementedException();
  }
}
