import { Query, Resolver } from '@nestjs/graphql';
import { MenusService } from './menus.service';
import { Menu, MenuDocument } from './schemas/menu.schema';

@Resolver(() => Menu)
export class MenusResolver {
  constructor(private readonly menusService: MenusService) {}

  @Query(() => [Menu])
  async menus(): Promise<MenuDocument[]> {
    return this.menusService.findAll();
  }
}