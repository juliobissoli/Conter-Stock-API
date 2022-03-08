import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HistoryDocument = History & Document;

@Schema()
export class History {
  @Prop()
  date: string;
  @Prop()
  product_id: string;
  @Prop()
  product_name: string;
  @Prop()
  username: string;
  @Prop()
  input_quantity: number;
  @Prop()
  old_quantity: number;
  @Prop()
  new_quantity: number;
}

export const HistorySchema = SchemaFactory.createForClass(History);
