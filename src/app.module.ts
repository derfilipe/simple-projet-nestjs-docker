import { Module } from '@nestjs/common';
import { AppResolver } from './app.resolver';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MenusModule } from './menus/menus.module';
import { ClientsModule } from './clients/clients.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: 'schema.gql',
      driver: ApolloDriver,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    MenusModule,
    ClientsModule,
  ],
  controllers: [],
  providers: [AppService, AppResolver],
})
export class AppModule {}
