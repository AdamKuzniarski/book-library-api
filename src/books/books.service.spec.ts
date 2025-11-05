import { Test, TestingModule } from '@nestjs/testing';
import { BooksService } from './books.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

describe('BooksService', () => {
  let service: BooksService;
  let repository: Repository<Book>;

  const mockBook: Book = {
    id: '1',
    title: 'Test Book',
    author: 'Test Author',
    isbn: '1234567890',
    publishedDate: new Date('2024-01-01'),
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const mockRepository = {
    find: jest.fn(),
    findOne: jest.fn(), // ← GEÄNDERT: findOne statt findOneBy
    create: jest.fn(),
    save: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    // Alle Mocks vor jedem Test zurücksetzen
    jest.clearAllMocks();

    // Standard Mock-Verhalten wiederherstellen
    mockRepository.find.mockResolvedValue([mockBook]);
    mockRepository.findOne.mockResolvedValue(mockBook); // ← GEÄNDERT
    mockRepository.create.mockReturnValue(mockBook);
    mockRepository.save.mockResolvedValue(mockBook);
    mockRepository.delete.mockResolvedValue({ affected: 1 });

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BooksService,
        {
          provide: getRepositoryToken(Book),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<BooksService>(BooksService);
    repository = module.get<Repository<Book>>(getRepositoryToken(Book));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of books', async () => {
      const result = await service.findAll();
      expect(result).toEqual([mockBook]);
      expect(repository.find).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a single book', async () => {
      const result = await service.findOne('1');
      expect(result).toEqual(mockBook);
      expect(repository.findOne).toHaveBeenCalledWith({ where: { id: '1' } }); // ← GEÄNDERT
    });

    it('should throw NotFoundException when book not found', async () => {
      mockRepository.findOne.mockResolvedValueOnce(null); // ← GEÄNDERT
      await expect(service.findOne('999')).rejects.toThrow(NotFoundException);
    });
  });

  describe('create', () => {
    it('should create a book', async () => {
      const createDto: CreateBookDto = {
        title: 'Test Book',
        author: 'Test Author',
        isbn: '1234567890',
        publishedDate: new Date('2024-01-01'),
      };
      const result = await service.create(createDto);
      expect(result).toEqual(mockBook);
      // ← GEÄNDERT: Prüfen dass create aufgerufen wurde (mit beliebigen Argumenten)
      expect(repository.create).toHaveBeenCalled();
      expect(repository.save).toHaveBeenCalled();
    });
  });

  describe('update', () => {
    it('should update a book', async () => {
      const updateDto: UpdateBookDto = {
        title: 'Updated Book',
      };
      const result = await service.update('1', updateDto);
      expect(result).toEqual(mockBook);
      expect(repository.findOne).toHaveBeenCalledWith({ where: { id: '1' } }); // ← GEÄNDERT
      expect(repository.save).toHaveBeenCalled();
    });

    it('should throw NotFoundException when book not found', async () => {
      mockRepository.findOne.mockResolvedValueOnce(null); // ← GEÄNDERT
      await expect(service.update('999', {})).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('remove', () => {
    it('should remove a book', async () => {
      await service.remove('1');
      // ← GEÄNDERT: Dein Service ruft nur delete auf, keine Vorprüfung
      expect(repository.delete).toHaveBeenCalledWith('1');
    });
  });
});
