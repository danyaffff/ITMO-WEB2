import { Module } from '@nestjs/common';
import { IndexController } from './index/app.index.controller';

@Module({
  controllers: [IndexController],
})
export class AppModule {}
