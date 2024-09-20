import { Module } from '@nestjs/common';
import { ChairAssignmentsService } from './chair-assignments.service';
import { ChairAssignmentsController } from './chair-assignments.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ChairAssignment, ChairAssignmentSchema } from './schemas/chair-assignment.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: ChairAssignment.name, schema: ChairAssignmentSchema }])],

  controllers: [ChairAssignmentsController],
  providers: [ChairAssignmentsService],
})
export class ChairAssignmentsModule { }
