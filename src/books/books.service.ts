import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from './entities/book.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { randomUUID } from 'crypto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  private books: Book[] = [];

  findAll(): Book[] {
    return this.books;
  }

  findOne(id: string): Book {
    const book = this.books.find((book) => book.id === id);
    if (!book) {
      throw new NotFoundException('Book not found');
    }
    return book;
  }

  create(dto: CreateBookDto): Book {
    const book: Book = { id: randomUUID(), ...dto };
    this.books.push(book);
    return book;
  }

  update(id: string, dto: UpdateBookDto): Book {
    const index = this.books.findIndex((book) => book.id === id);
    if (index === -1) throw new NotFoundException('Book not found');
    const updatedBook: Book = { id, ...dto };
    this.books[index] = updatedBook;
    return updatedBook;
  }

  remove(id: string): void {
    const index = this.books.findIndex((book) => book.id === id);
    if (index === -1) throw new NotFoundException('Book not found');
    this.books.splice(index, 1);
  }
}
