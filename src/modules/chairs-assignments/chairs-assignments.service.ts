import { Injectable } from '@nestjs/common';
import { CreateChairsAssignmentDto } from './dto/create-chairs-assignment.dto';
import { UpdateChairsAssignmentDto } from './dto/update-chairs-assignment.dto';

@Injectable()
export class ChairsAssignmentsService {
  create(createChairsAssignmentDto: CreateChairsAssignmentDto) {
    return 'This action adds a new chairsAssignment';
  }

  findAll() {
    return `This action returns all chairsAssignments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chairsAssignment`;
  }

  update(id: number, updateChairsAssignmentDto: UpdateChairsAssignmentDto) {
    return `This action updates a #${id} chairsAssignment`;
  }

  remove(id: number) {
    return `This action removes a #${id} chairsAssignment`;
  }
}
