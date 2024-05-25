import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Progress } from './progress.entity';
import { ProgressService } from './progress.service';
import { ProgressController } from './progress.controller';
import { BookModule } from '../book/book.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Progress]),
    BookModule, // Импортируем BookModule
  ],
  providers: [ProgressService],
  controllers: [ProgressController],
})
export class ProgressModule {}
