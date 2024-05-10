import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Client } from './schemas/client.schema';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/inputs/create-client.dto';
import { UpdateClientDto } from './dto/inputs/update-client.dto';
import { DeleteClientDto } from './dto/inputs/delete-client.dto';
import { GetClientDto } from './dto/args/get-client.dto';

@Resolver(() => Client)
export class ClientsResolver {
  constructor(private readonly clientsService: ClientsService) {}

  @Mutation(() => Client, { name: 'createClient' })
  async createClient(
    @Args('createClientData')
    createClientData: CreateClientDto,
  ) {
    return await this.clientsService.create(createClientData);
  }

  @Mutation(() => Client, { name: 'updateClient' })
  async updateClient(
    @Args('updateClientData')
    updateClientData: UpdateClientDto,
  ) {
    return this.clientsService.update(updateClientData._id, updateClientData);
  }

  @Mutation(() => Client, { name: 'deleteClient', nullable: true })
  async deleteClient(
    @Args('deleteClient')
    deleteClientData: DeleteClientDto,
  ) {
    return this.clientsService.remove(deleteClientData._id);
  }

  @Query(() => [Client], { name: 'clients' })
  async getClients() {
    return this.clientsService.findAll();
  }

  @Query(() => Client, { name: 'client' })
  async getClient(@Args() getClientArgs: GetClientDto) {
    return this.clientsService.findOne(getClientArgs._id);
  }
}
