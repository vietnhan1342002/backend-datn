import { Test, TestingModule } from '@nestjs/testing';
import { ChairsAssignmentsService } from './chairs-assignments.service';

describe('ChairsAssignmentsService', () => {
  let service: ChairsAssignmentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChairsAssignmentsService],
    }).compile();

    service = module.get<ChairsAssignmentsService>(ChairsAssignmentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
