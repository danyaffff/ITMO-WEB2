import { Module } from '@nestjs/common';
import { MeModule } from './me/me.module';
import { TodoModule } from './todo/todo.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MeModule,
    TodoModule,
    UsersModule,
    AuthModule,
  ]
})
export class AppModule {}
