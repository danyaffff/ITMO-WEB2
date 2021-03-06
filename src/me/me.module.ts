import { Module } from '@nestjs/common';
import { MeController } from './me.controller';
import { MeService } from './me.service';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [MeController],
  providers: [MeService, PrismaService],
})
export class MeModule {}
