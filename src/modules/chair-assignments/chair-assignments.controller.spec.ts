import { Test, TestingModule } from '@nestjs/testing';
import { ChairAssignmentsController } from './chair-assignments.controller';
import { ChairAssignmentsService } from './chair-assignments.service';

describe('ChairAssignmentsController', () => {
  let controller: ChairAssignmentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChairAssignmentsController],
      providers: [ChairAssignmentsService],
    }).compile();

    controller = module.get<ChairAssignmentsController>(ChairAssignmentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
