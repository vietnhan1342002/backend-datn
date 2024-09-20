import { PartialType } from '@nestjs/mapped-types';
import { CreateChairsAssignmentDto } from './create-chairs-assignment.dto';

export class UpdateChairsAssignmentDto extends PartialType(CreateChairsAssignmentDto) {}
