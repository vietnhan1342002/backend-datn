import { Test, TestingModule } from '@nestjs/testing';
import { ChairsController } from './chairs.controller';
import { ChairsService } from './chairs.service';

describe('ChairsController', () => {
  let controller: ChairsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChairsController],
      providers: [ChairsService],
    }).compile();

    controller = module.get<ChairsController>(ChairsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
