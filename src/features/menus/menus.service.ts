import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Menu, MenuDocument } from './schemas/menu.schema';
import { Model } from 'mongoose';
import { CreateMenusDto } from './dto/inputs/create-menus.dto';
import { UpdateMenusDto } from './dto/inputs/update-menus.dto';

@Injectable()
export class MenusService {
  constructor(
    @InjectModel(Menu.name) private readonly menuModel: Model<MenuDocument>,
  ) {}

  async create(createMenuDto: CreateMenusDto): Promise<MenuDocument> {
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
    updateMenuDto: UpdateMenusDto,
  ): Promise<MenuDocument> {
    return this.menuModel.findByIdAndUpdate(id, updateMenuDto);
  }

  async getMenus() {
    const MenuDocument = await this.menuModel.find({});
    return MenuDocument.map((todo) => this.toModel(todo));
  }

  async remove(id: string) {
    return this.menuModel.findByIdAndDelete(id);
  }

  private toModel(menuDocument: MenuDocument) {
    return {
      _id: menuDocument._id.toHexString(),
      ...menuDocument,
    };
  }
}
