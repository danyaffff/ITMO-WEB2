import { IsNotEmpty, IsString, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class WorkPlaceDto {
  @ApiProperty({
    description: 'Название WorkPlace'
  })
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @ApiProperty({
    description: 'Дата начала работы'
  })
  @IsNotEmpty()
  @IsString()
  readonly fromDate: string;

  @ApiProperty({
    description: 'Дата окончания работы'
  })
  @IsNotEmpty()
  @IsString()
  readonly toDate: string;

  @ApiProperty({
    description: 'Ссылка на сайт'
  })
  @IsUrl()
  @IsString()
  readonly link: string;
}
