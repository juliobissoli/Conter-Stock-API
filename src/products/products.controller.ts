import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { HistoriesService } from '../history/history.service';
import { response } from 'express';
@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
    private historiesService: HistoriesService,
  ) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }

  @Put()
  async updateQuantity(@Body() data: any) {
    const text = data.message_qr.split('@');

    try {
      const product = await this.productsService.findByCode(text[0]);

      let res;
      if (product) {
        product.quantity += data.quantity;
        console.log('Alterou produto ==> ', product);
        res = await product.save();
      } else {
        console.log('Nao acho vai cadastrar');
        const create_data = {
          name: text[1],
          type: text[2],
          code: text[0],
          quantity: data.quantity,
          descriptions: 'descrição',
        };

        res = await this.productsService.create(create_data);
      }

      await this.historiesService.create({
        date: new Date().toDateString(),
        product_id: res._id,
        product_name: res.name,
        username: 'Klaydom',
        input_quantity: data.quantity,
        old_quantity: res.quantity - data.quantity,
        new_quantity: res.quantity,
      });

      return res;
    } catch (error) {
      console.log('Eta errado => ', error);
    }
    // return this.productsService.findAll();
  }

  @Put('/asd')
  asd(@Body() data: any) {
    console.log('asd ', data);
    return data;
    // return this.productsService.findAll();
  }
}
