import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ProductsModule, 
    MongooseModule.forRoot('mongodb+srv://csroot:csr00t@cluster0.zny7l.mongodb.net/test')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
