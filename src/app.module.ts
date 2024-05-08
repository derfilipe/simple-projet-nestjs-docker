import { Module } from '@nestjs/common';
import { AppResolver } from './app.resolver';
import { AppService } from './core/app.service';
import { MenusModule } from './features/menus/menus.module';
import { ClientsModule } from './features/clients/clients.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, MenusModule, ClientsModule],
  controllers: [],
  providers: [AppService, AppResolver],
})
export class AppModule {}
