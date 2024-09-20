import { Test, TestingModule } from '@nestjs/testing';
import { ChairAssignmentsService } from './chair-assignments.service';

describe('ChairAssignmentsService', () => {
  let service: ChairAssignmentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChairAssignmentsService],
    }).compile();

    service = module.get<ChairAssignmentsService>(ChairAssignmentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
