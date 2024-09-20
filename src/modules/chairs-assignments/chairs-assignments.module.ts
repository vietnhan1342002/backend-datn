import { Module } from '@nestjs/common';
import { ChairsAssignmentsService } from './chairs-assignments.service';
import { ChairsAssignmentsController } from './chairs-assignments.controller';

@Module({
  controllers: [ChairsAssignmentsController],
  providers: [ChairsAssignmentsService],
})
export class ChairsAssignmentsModule {}
