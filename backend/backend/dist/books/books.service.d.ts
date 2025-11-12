import { Book } from './entities/book.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Repository } from 'typeorm';
export declare class BooksService {
    private repo;
    constructor(repo: Repository<Book>);
    findAll(): Promise<Book[]>;
    create(dto: CreateBookDto): Promise<Book>;
    findOne(id: string): Promise<Book>;
    update(id: string, dto: UpdateBookDto): Promise<{
        id: string;
        title: string;
        author: string;
        publishedYear: number;
    } & Book>;
    remove(id: string): Promise<void>;
}
