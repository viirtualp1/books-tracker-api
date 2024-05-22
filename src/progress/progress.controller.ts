import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ProgressService } from './progress.service';
import { Progress } from './progress.entity';

@Controller('progress')
export class ProgressController {
  constructor(private readonly progressService: ProgressService) {}

  @Get()
  findAll(): Promise<Progress[]> {
    return this.progressService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Progress> {
    return this.progressService.findOne(id);
  }

  @Post()
  create(@Body() progress: Progress): Promise<Progress> {
    return this.progressService.create(progress);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() progress: Progress,
  ): Promise<Progress> {
    return this.progressService.update(id, progress);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.progressService.remove(id);
  }
}
