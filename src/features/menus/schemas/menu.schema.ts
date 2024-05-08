import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ObjectType, Field } from '@nestjs/graphql';

export type MenuDocument = Menu & Document;

@ObjectType()
@Schema({
  timestamps: { createdAt: 'created', updatedAt: 'updated' },
})
export class Menu {
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
