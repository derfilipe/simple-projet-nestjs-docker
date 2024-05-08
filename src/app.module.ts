import {Module} from '@nestjs/common';
import {AppResolver} from './app.resolver';
import {AppService} from './core/app.service';
import {MenusModule} from './features/menus/menus.module';
import {ClientsModule} from './features/clients/clients.module';
import {DatabaseModule} from './database/database.module';
import {GraphQLModule} from '@nestjs/graphql';
import {ApolloDriver, ApolloDriverConfig} from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: 'schema.gql',
      driver: ApolloDriver,
      path: 'api/graphql',
    }),
    DatabaseModule,
    MenusModule,
    ClientsModule,
  ],
  controllers: [],
  providers: [AppService, AppResolver],
})
export class AppModule {
}
