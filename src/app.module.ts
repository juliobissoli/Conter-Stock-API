import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { HistoriesModule } from './history/history.module';
import { HistoryController } from './history/history.controller';
import { HistoriesService } from './history/history.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ProductsModule,
    HistoriesModule,
    MongooseModule.forRoot(process.env.DB_HOST)],
    // MongooseModule.forRoot('mongodb+srv://csroot:csr00t@cluster0.zny7l.mongodb.net/test')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}