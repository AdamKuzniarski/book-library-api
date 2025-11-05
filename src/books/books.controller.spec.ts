import { Test, TestingModule } from '@nestjs/testing';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

describe('BooksController', () => {
  let controller: BooksController;
  let service: BooksService;

  const mockBook: Book = {
    id: '1sad',
    title: 'Test Book',
    author: 'Test Author',
    publishedYear: 1922,
  };

  const mockBooksService = {
    findAll: jest.fn().mockResolvedValue([mockBook]),
    findOne: jest.fn().mockResolvedValue(mockBook),
    create: jest.fn().mockResolvedValue(mockBook),
    update: jest.fn().mockResolvedValue(mockBook),
    remove: jest.fn().mockResolvedValue(undefined),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BooksController],
      providers: [
        {
          provide: BooksService,
          useValue: mockBooksService,
        },
      ],
    }).compile();

    controller = module.get<BooksController>(BooksController);
    service = module.get<BooksService>(BooksService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of books', async () => {
      const result = await controller.findAll();
      expect(result).toEqual([mockBook]);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a single book', async () => {
      const result = await controller.findOne('1');
      expect(result).toEqual(mockBook);
      expect(service.findOne).toHaveBeenCalledWith('1');
    });
  });
  // describe('findOne', () => {
  //   it('should return a single book', async () => {
  //     const result = await controller.findOne('1');
  //     expect(result).toEqual(mockBook);
  //     expect(service.findOne).toHaveBeenCalledWith('1');
  //   });
  // });

  describe('create', () => {
    it('should create a book', async () => {
      const createDto: CreateBookDto = {
        title: 'Test Book',
        author: 'Test Author',
        publishedYear: 988,
      };
      const result = await controller.create(createDto);
      expect(result).toEqual(mockBook);
      expect(service.create).toHaveBeenCalledWith(createDto);
    });
  });

  describe('update', () => {
    it('should update a book', async () => {
      const updateDto: UpdateBookDto = {
        title: 'Updated Book',
      };
      const result = await controller.update('1', updateDto);
      expect(result).toEqual(mockBook);
      expect(service.update).toHaveBeenCalledWith('1', updateDto);
    });
  });

  describe('delete', () => {
    it('should delete a book', async () => {
      await controller.delete('1');
      expect(service.remove).toHaveBeenCalledWith('1');
    });
  });
});
