import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Book } from '../book/book.entity';

@Entity()
export class Progress {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Book, (book) => book.id)
  book: Book;

  @Column()
  currentPage: number;
}
