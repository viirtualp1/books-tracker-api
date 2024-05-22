import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Progress } from './progress.entity';
import { Book } from '../book/book.entity';

@Injectable()
export class ProgressService {
  constructor(
    @InjectRepository(Progress)
    private progressRepository: Repository<Progress>,

    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {}

  findAll(): Promise<Progress[]> {
    return this.progressRepository.find({ relations: ['book'] });
  }

  async findOne(id: number): Promise<Progress> {
    return this.progressRepository.findOne({
      where: { id },
      relations: ['book'],
    });
  }

  async create(progress: Progress): Promise<Progress> {
    const book = await this.booksRepository.findOne({
      where: {
        id: progress.book.id,
      },
    });

    if (!book) {
      throw new Error('Book not found');
    }

    progress.book = book;
    return this.progressRepository.save(progress);
  }

  async update(id: number, progress: Progress): Promise<Progress> {
    const existingProgress = await this.progressRepository.findOne({
      where: { id },
      relations: ['book'],
    });

    if (!existingProgress) {
      throw new Error('Progress not found');
    }

    existingProgress.currentPage = progress.currentPage;
    return this.progressRepository.save(existingProgress);
  }

  async remove(id: number): Promise<void> {
    await this.progressRepository.delete(id);
  }
}
