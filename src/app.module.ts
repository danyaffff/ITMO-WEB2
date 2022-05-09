import { Module } from '@nestjs/common';
import { MeModule } from './index/me.module';
import { TodoModule } from './todo/todo.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MeModule, TodoModule, UsersModule],
})
export class AppModule {}
