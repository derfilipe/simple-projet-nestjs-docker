import { Injectable } from "@nestjs/common";
import { CreateClientDto } from "./dto/create-client.dto";
import { UpdateClientDto } from "./dto/update-client.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Client, ClientDocument } from "./schemas/client.schema";

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

  findOne(id: number) {
    return this.clientModel.findById(id);
  }

  update(id: number, updateClientDto: UpdateClientDto): Promise<ClientDocument> {
    return this.clientModel.findByIdAndUpdate(id);
  }

  remove(id: number) {
    return this.clientModel.findByIdAndDelete(id);
  }
}
