import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {}

  findAll(): Promise<Book[]> {
    return this.booksRepository.find();
  }

  findOne(id: number): Promise<Book> {
    return this.booksRepository.findOne({
      where: {
        id,
      },
    });
  }

  create(book: Book): Promise<Book> {
    return this.booksRepository.save(book);
  }

  async update(id: number, book: Book): Promise<Book> {
    await this.booksRepository.update(id, book);
    return this.booksRepository.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: number): Promise<void> {
    await this.booksRepository.delete(id);
  }
}
