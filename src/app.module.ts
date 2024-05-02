import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MenusModule } from './menus/menus.module';

@Module({
  imports: [MongooseModule.forRoot(mongodb://lcoalhost:27017/Restaurant
), MenusModule],
controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}