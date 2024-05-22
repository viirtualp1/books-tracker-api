import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Progress } from './progress.entity';
import { ProgressService } from './progress.service';
import { ProgressController } from './progress.controller';
import { Book } from '../book/book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Progress, Book])],
  providers: [ProgressService],
  controllers: [ProgressController],
})
export class ProgressModule {}
