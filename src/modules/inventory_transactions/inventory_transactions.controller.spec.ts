import { Test, TestingModule } from '@nestjs/testing';
import { InventoryTransactionsController } from './inventory_transactions.controller';
import { InventoryTransactionsService } from './inventory_transactions.service';

describe('InventoryTransactionsController', () => {
  let controller: InventoryTransactionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InventoryTransactionsController],
      providers: [InventoryTransactionsService],
    }).compile();

    controller = module.get<InventoryTransactionsController>(InventoryTransactionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
