import { IsNotEmpty, IsString, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class WorkPlaceDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly name: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly fromDate: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly toDate: string;
  @ApiProperty()
  @IsUrl()
  @IsString()
  readonly link: string;
}
