import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './entities/product.entity';
import { History, HistorySchema } from '../history/entities/history.entity';
import { HistoriesService } from '../history/history.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Product.name, schema: ProductSchema },
      { name: History.name, schema: HistorySchema },
    ]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService, HistoriesService],
})
export class ProductsModule {}
