import { Injectable } from '@nestjs/common';
import { CreateChairAssignmentDto } from './dto/create-chair-assignment.dto';
import { UpdateChairAssignmentDto } from './dto/update-chair-assignment.dto';

@Injectable()
export class ChairAssignmentsService {
  create(createChairAssignmentDto: CreateChairAssignmentDto) {
    return 'This action adds a new chairAssignment';
  }

  findAll() {
    return `This action returns all chairAssignments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chairAssignment`;
  }

  update(id: number, updateChairAssignmentDto: UpdateChairAssignmentDto) {
    return `This action updates a #${id} chairAssignment`;
  }

  remove(id: number) {
    return `This action removes a #${id} chairAssignment`;
  }
}
