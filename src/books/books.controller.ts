import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { BooksService } from './books.service';
import { Book } from './entities/book.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@ApiTags('books')
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  @ApiOkResponse({ type: [Book], description: 'A list of books' })
  findAll(): Book[] {
    return this.booksService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', required: true, schema: { type: 'string' } })
  @ApiOkResponse({ type: Book, description: 'A single book' })
  @ApiNotFoundResponse({ description: 'Book not found' })
  findOne(@Param('id') id: string): Book {
    return this.booksService.findOne(id);
  }

  @Post()
  @ApiCreatedResponse({ type: Book, description: 'Book created successfully' })
  create(@Body() dto: CreateBookDto): Book {
    return this.booksService.create(dto);
  }

  @Put(':id')
  @ApiParam({ name: 'id', required: true, schema: { type: 'string' } })
  @ApiOkResponse({ type: Book, description: 'Book updated successfully' })
  @ApiNotFoundResponse({ description: 'Book not found' })
  update(@Param('id') id: string, @Body() dto: UpdateBookDto): Book {
    return this.booksService.update(id, dto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', required: true, schema: { type: 'string' } })
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiNotFoundResponse({ description: 'Book not found' })
  delete(@Param('id') id: string): void {
    this.booksService.remove(id);
  }
}
