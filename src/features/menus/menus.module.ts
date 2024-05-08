import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { MenusService } from './menus.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Menu, MenuSchema } from './schemas/menu.schema';
import { MenusResolver } from './menus.resolver';
// import { AuthenticationMiddleware } from '../../dist/common/authentication.middleware';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Menu.name,
        schema: MenuSchema,
      },
    ]),
  ],
  providers: [MenusService, MenusResolver],
})
export class MenusModule {}

// export class MenusModule implements NestModule {
//   configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
//     consumer
//       .apply(AuthenticationMiddleware)
//       .forRoutes({ method: RequestMethod.POST, path: '/menus/' });
//   }
// }
