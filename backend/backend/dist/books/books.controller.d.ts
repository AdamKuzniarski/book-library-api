import { BooksService } from './books.service';
import { Book } from './entities/book.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    findAll(): Promise<Book[]>;
    findOne(id: string): Promise<Book>;
    create(dto: CreateBookDto): Promise<Book>;
    update(id: string, dto: UpdateBookDto): Promise<Book>;
    delete(id: string): Promise<void>;
}
