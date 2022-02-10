import { Controller, Get, Post, Body, Patch, Param, Delete , Put} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

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

  @Put(':id')
  async updateQuantity(@Param('id') id: string, @Body() data:any) {
    console.log(data)
    // const product = await this.productsService.findOne(id);

    let code = data.message_qr.split('@');
    if(code.length > 0) code  = parseInt(code[0])


    console.log("Code -==> ", code)
    const product = await this.productsService.findByCode(code);
    console.log('prod  => ', product)
    if(product) {
      console.log("product => ", product)
      product.quantity += data.quantity;
      return await product.save();

    } else {
      console.log('ta no else');
    }
    return data;
    // return this.productsService.findAll();
  }

  @Put('/asd')
  asd(@Body() data:any) {
    console.log('asd ',data)
    return data;
    // return this.productsService.findAll();
  }

}
