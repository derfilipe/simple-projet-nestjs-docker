import { Injectable } from "@nestjs/common";
import { CreateMenuDto } from "./dto/create-menu.dto";
import { UpdateMenuDto } from "./dto/update-menu.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Menu, MenuDocument } from "./schemas/menu.schema";
import { Model } from "mongoose";

@Injectable()
export class MenusService {
  constructor(
    @InjectModel(Menu.name) private readonly menuModel: Model<MenuDocument>
  ) {
  }

  async create(createMenuDto: CreateMenuDto): Promise<MenuDocument> {
    const menu = new this.menuModel(createMenuDto);
    return menu.save();
  }

  async findAll(): Promise<MenuDocument[]> {
    return this.menuModel.find();
  }

  findOne(id: string) {
    return this.menuModel.findById(id);
  }

  async update(
    id: string,
    updateMenuDto: UpdateMenuDto
  ): Promise<MenuDocument> {
    return this.menuModel.findByIdAndUpdate(id, updateMenuDto);
  }

  async remove(id: number) {
    return this.menuModel.findByIdAndDelete(id);
  }
}
