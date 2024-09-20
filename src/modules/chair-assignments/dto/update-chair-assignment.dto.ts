import { PartialType } from '@nestjs/mapped-types';
import { CreateChairAssignmentDto } from './create-chair-assignment.dto';

export class UpdateChairAssignmentDto extends PartialType(CreateChairAssignmentDto) {}
