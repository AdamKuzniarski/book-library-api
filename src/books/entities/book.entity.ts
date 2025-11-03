import { ApiProperty } from '@nestjs/swagger';

export class Book {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  id: string;

  @ApiProperty({ example: 'W pustyni i w puszczy/Durch Wüste und Wildnis' })
  title: string;
  @ApiProperty({ example: 'Henryk Sienkiewicz' })
  author: string;

  @ApiProperty({ example: 1911 })
  publishedYear: number;
}
