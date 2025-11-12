import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class CreateBookDto {
  @ApiProperty({ example: 'W pustyni i w puszczy/Durch Wüste und Wildnis' })
  @IsString()
  title: string;

  @ApiProperty({ example: 'Henryk Sienkiewicz' })
  @IsString()
  author: string;

  @ApiProperty({ example: 1911 })
  @IsInt()
  publishedYear: number;
}
