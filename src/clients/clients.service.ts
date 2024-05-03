import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateClientDto } from "./dto/create-client.dto";
import { UpdateClientDto } from "./dto/update-client.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Client, ClientDocument } from "./schemas/client.schema";
import { Gender } from "../common/Gender";

@Injectable()
export class ClientsService {
  constructor(
    @InjectModel(Client.name) private readonly clientModel: Model<ClientDocument>
  ) {
  }

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

  update(id: number, updateClientDto: UpdateClientDto): Promise<ClientDocument> {
    return this.clientModel.findByIdAndUpdate(id);
  }

  remove(id: number) {
    return this.clientModel.findByIdAndDelete(id);
  }

  getAllByGender(gender: Gender) {

    if (gender) {
      return this.clientModel.find({ gender: gender }).exec();
    }

    return this.clientModel.find().exec();
  }
}
