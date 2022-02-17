import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product, ProductDocument,  } from './entities/product.entity';


@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {}
  
  create(createProductDto: CreateProductDto) {
    const product = new this.productModel(createProductDto);
    return product.save();

  }

  findAll() {
    return this.productModel.find({strict: false});
  }

  findOne(id: string) {
    return this.productModel.findById(id);
  }

 async findByCode(code: string) {
    const list = await this.productModel.find({code: code, strict: false});
    return list[0] || null
  }


  update(id: string, updateProductDto: UpdateProductDto) {
    return this.productModel.findByIdAndUpdate(
        { _id: id,},
        { updateProductDto},
        { new: true}
      )
  }

  remove(id: string) {
    return this.productModel.deleteOne({_id: id}).exec();
  }
}
