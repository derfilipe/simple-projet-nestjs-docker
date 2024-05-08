import { Test, TestingModule } from '@nestjs/testing';
import { ClientsController } from '../../../src/features/clients/clients.controller';
import { ClientsService } from '../../../src/features/clients/clients.service';

describe('ClientsController', () => {
  let controller: ClientsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientsController],
      providers: [ClientsService],
    }).compile();

    controller = module.get<ClientsController>(ClientsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
