import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type BirdDocument = Bird & mongoose.Document;

@Schema({ timestamps: true })
export class Bird {
  @Prop({ required: true })
  order_bird: string;

  @Prop({ required: true })
  family_bird: string;

  @Prop({ required: true })
  name_english: string;

  @Prop({ required: true })
  name_spanish: string;

  @Prop({ required: true })
  scientific_name: string;

  @Prop({ required: true, enum: ['NA', 'CE', 'E'] })
  type_endemism: string;

  @Prop({
    required: true,
    enum: ['NA', 'EX', 'EW', 'CR', 'EN', 'VU', 'NT', 'LC'],
  })
  type_threat: string;

  @Prop({})
  comment: string;
}

export const BirdSchema = SchemaFactory.createForClass(Bird);
