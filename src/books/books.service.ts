import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from './entities/book.entity';

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
}
