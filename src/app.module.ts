import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookModule } from './book/book.module';
import { ProgressModule } from './progress/progress.module';
import { Book } from './book/book.entity';
import { Progress } from './progress/progress.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'books.db',
      entities: [Book, Progress],
      synchronize: true,
    }),
    BookModule,
    ProgressModule,
  ],
})
export class AppModule {}
