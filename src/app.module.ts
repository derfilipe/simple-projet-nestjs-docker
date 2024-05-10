import { Module } from '@nestjs/common';
import { AppResolver } from './app.resolver';
import { AppService } from './core/app.service';
import { MenusModule } from './features/menus/menus.module';
import { ClientsModule } from './features/clients/clients.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: 'schema.gql',
      driver: ApolloDriver,
      path: 'api/graphql',
    }),
    MongooseModule.forRoot('mongodb://localhost:27017', {
      dbName: 'restaurantdb',
    }),
    MenusModule,
    ClientsModule,
  ],
  controllers: [],
  providers: [AppService, AppResolver],
})
export class AppModule {}
