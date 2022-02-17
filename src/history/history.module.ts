import { Module } from '@nestjs/common';
import { HistoriesService } from './history.service';
import { HistoryController } from './history.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { History,  HistorySchema } from './entities/history.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: History.name, schema: HistorySchema}])
  ],
  controllers: [HistoryController],
  providers: [HistoriesService]
})
export class HistoriesModule {}
