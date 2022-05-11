import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsUrl, Length } from 'class-validator';

export class UserDto {
  @ApiProperty({
    description: 'Email пользователя'
  })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  readonly email: string;

  @ApiProperty({
    description: 'Пароль пользователя'
  })
  @Length(8)
  @IsString()
  readonly password: string
}
