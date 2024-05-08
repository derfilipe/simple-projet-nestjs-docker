import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MenusService } from './menus.service';
import { Menu } from './schemas/menu.schema';
import { CreateMenusDto } from './dto/inputs/create-menus.dto';
import { GetMenusDto } from './dto/args/get-menus.dto';
import { UpdateMenusDto } from './dto/inputs/update-menus.dto';
import { DeleteMenusDto } from './dto/inputs/delete-menus.dto';

@Resolver(() => Menu)
export class MenusResolver {
  constructor(private readonly menusService: MenusService) {}

  @Mutation(() => Menu, { name: 'createMenu' })
  async createMenu(
    @Args('createMenuData')
    createMenuData: CreateMenusDto,
  ) {
    return await this.menusService.create(createMenuData);
  }

  @Mutation(() => Menu, { name: 'updateMenu' })
  async updateMenu(
    @Args('updateMenuData')
    updateMenuData: UpdateMenusDto,
  ) {
    return this.menusService.update(updateMenuData._id, updateMenuData);
  }

  @Mutation(() => Menu, { name: 'deleteMenu', nullable: true })
  async deleteMenu(
    @Args('deleteMenu')
    deleteMenuData: DeleteMenusDto,
  ) {
    return this.menusService.remove(deleteMenuData._id);
  }

  @Query(() => [Menu], { name: 'menus' })
  async getMenus() {
    return this.menusService.getMenus();
  }

  @Query(() => Menu, { name: 'menu' })
  async getMenu(@Args() getMenuArgs: GetMenusDto) {
    return this.menusService.findOne(getMenuArgs._id);
  }
}
