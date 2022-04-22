import { Module } from '@nestjs/common';
import { IndexController } from './index/app.index.controller';
import { MeController } from './me/me.controller';
import { MeModule } from './me/me.module';
import { MeService } from './me/me.service';

@Module({
  imports: [MeModule],
  controllers: [IndexController, MeController],
  providers: [MeService],
})
export class AppModule {}
