import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from './entities/book.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { randomUUID } from 'crypto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
  constructor(@InjectRepository(Book) private repo: Repository<Book>) {}
  // private books: Book[] = [];

  findAll() {
    return this.repo.find();
  }
  // findAll(): Book[] {
  //   return this.books;
  // }

  create(dto: CreateBookDto) {
    const entity = this.repo.create({ id: randomUUID(), ...dto });
    return this.repo.save(entity);
  }
  // create(dto: CreateBookDto): Book {
  //   const book: Book = { id: randomUUID(), ...dto };
  //   this.books.push(book);
  //   return book;
  // }

  async findOne(id: string) {
    const book = await this.repo.findOne({ where: { id } });
    if (!book) throw new NotFoundException('Book not found');
    return book;
  }
  // findOne(id: string): Book {
  //   const book = this.books.find((book) => book.id === id);
  //   if (!book) {
  //     throw new NotFoundException('Book not found');
  //   }
  //   return book;
  // }

  async update(id: string, dto: UpdateBookDto) {
    const exists = await this.repo.findOne({ where: { id } });
    if (!exists) throw new NotFoundException('Book not found');
    return this.repo.save({ ...exists, ...dto, id });
  }

  // update(id: string, dto: UpdateBookDto): Book {
  //   const index = this.books.findIndex((book) => book.id === id);
  //   if (index === -1) throw new NotFoundException('Book not found');
  //   const updatedBook: Book = { id, ...dto };
  //   this.books[index] = updatedBook;
  //   return updatedBook;
  // }

  async remove(id: string) {
    const res = await this.repo.delete(id);
    if (res.affected === 0) throw new NotFoundException('Book not found');
  }

  // remove(id: string): void {
  //   const index = this.books.findIndex((book) => book.id === id);
  //   if (index === -1) throw new NotFoundException('Book not found');
  //   this.books.splice(index, 1);
  // }
}
