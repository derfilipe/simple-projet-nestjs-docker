import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Gender } from '../../common/Gender';
import { AbstractDocument } from '../../../database/abstract.schema';

export type ClientDocument = Client & Document;

@Schema({
  timestamps: { createdAt: 'created', updatedAt: 'updated' },
})
export class Client extends AbstractDocument {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  gender: Gender;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
