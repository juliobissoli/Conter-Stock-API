import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  name: string;
  @Prop()
  type: string;
  @Prop()
  code: number;
  @Prop()
  quantity: number;
  @Prop()
  descriptions: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
