import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Client, ClientDocument } from './schemas/client.schema';
import { Gender } from '../common/Gender';
import { CreateClientDto } from './dto/inputs/create-client.dto';
import { UpdateClientDto } from './dto/inputs/update-client.dto';

@Injectable()
export class ClientsService {
  constructor(
    @InjectModel(Client.name)
    private readonly clientModel: Model<ClientDocument>,
  ) {}

  create(createClientDto: CreateClientDto): Promise<ClientDocument> {
    const client = new this.clientModel(createClientDto);

    return client.save();
  }

  findAll(): Promise<ClientDocument[]> {
    return this.clientModel.find();
  }

  findOne(id: string) {
    return this.clientModel.findById(id);
  }

  update(
    id: string,
    updateClientDto: UpdateClientDto,
  ): Promise<ClientDocument> {
    return this.clientModel.findByIdAndUpdate(id);
  }

  remove(id: string) {
    return this.clientModel.findByIdAndDelete(id);
  }

  getAllByGender(gender: Gender) {
    if (gender) {
      return this.clientModel.find({ gender: gender }).exec();
    }

    return this.clientModel.find().exec();
  }
}
