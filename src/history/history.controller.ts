import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HistoriesService } from './history.service';
import { CreateHistoryDto } from './dto/create-history.dto';
import { UpdateHistoryDto } from './dto/update-history.dto';

@Controller('history')
export class HistoryController {
  constructor(private readonly HistoriesService: HistoriesService) {}

  @Post()
  create(@Body() createHistoryDto: CreateHistoryDto) {
    return this.HistoriesService.create(createHistoryDto);
  }

  @Get()
  findAll() {
    return this.HistoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.HistoriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHistoryDto: UpdateHistoryDto) {
    return this.HistoriesService.update(+id, updateHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.HistoriesService.remove(+id);
  }
}
