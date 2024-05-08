import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Field, ObjectType } from '@nestjs/graphql';
import { AbstractDocument } from '../../../database/abstract.schema';

export type MenuDocument = Menu & Document;

@ObjectType()
@Schema({
  timestamps: { createdAt: 'created', updatedAt: 'updated' },
})
export class Menu extends AbstractDocument {
  @Field()
  @Prop({ required: true })
  name: string;

  @Field()
  @Prop({ required: true })
  description: string;

  @Field()
  @Prop({ required: true })
  price: number;
}

export const MenuSchema = SchemaFactory.createForClass(Menu);
