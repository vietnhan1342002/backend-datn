import { Test, TestingModule } from '@nestjs/testing';
import { ChairsAssignmentsController } from './chairs-assignments.controller';
import { ChairsAssignmentsService } from './chairs-assignments.service';

describe('ChairsAssignmentsController', () => {
  let controller: ChairsAssignmentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChairsAssignmentsController],
      providers: [ChairsAssignmentsService],
    }).compile();

    controller = module.get<ChairsAssignmentsController>(ChairsAssignmentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
