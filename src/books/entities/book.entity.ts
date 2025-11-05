import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'books' })
export class Book {
  @PrimaryColumn('uuid')
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  id: string;

  @Column({ length: 255 })
  @ApiProperty({ example: 'W pustyni i w puszczy/Durch Wüste und Wildnis' })
  title: string;

  @Column({ length: 150 })
  @ApiProperty({ example: 'Henryk Sienkiewicz' })
  author: string;

  @Column('int')
  @ApiProperty({ example: 1911 })
  publishedYear: number;
}
