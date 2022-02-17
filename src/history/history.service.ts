import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateHistoryDto } from './dto/create-history.dto';
import { UpdateHistoryDto } from './dto/update-history.dto';
import { History, HistoryDocument  } from './entities/history.entity';

@Injectable()

export class HistoriesService {
  constructor(@InjectModel(History.name) private historyModel: Model<HistoryDocument>) {}
 
  create(createHistoryDto: CreateHistoryDto) {
    const history =  new this.historyModel(createHistoryDto)
    return history.save()
    
  }

  findAll() {
    return `This action returns all history`;
  }

  findOne(id: number) {
    return `This action returns a #${id} history`;
  }

  update(id: number, updateHistoryDto: UpdateHistoryDto) {
    return `This action updates a #${id} history`;
  }

  remove(id: number) {
    return `This action removes a #${id} history`;
  }
}
