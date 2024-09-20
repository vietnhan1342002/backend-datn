import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChairsAssignmentsService } from './chairs-assignments.service';
import { CreateChairsAssignmentDto } from './dto/create-chairs-assignment.dto';
import { UpdateChairsAssignmentDto } from './dto/update-chairs-assignment.dto';

@Controller('chairs-assignments')
export class ChairsAssignmentsController {
  constructor(private readonly chairsAssignmentsService: ChairsAssignmentsService) {}

  @Post()
  create(@Body() createChairsAssignmentDto: CreateChairsAssignmentDto) {
    return this.chairsAssignmentsService.create(createChairsAssignmentDto);
  }

  @Get()
  findAll() {
    return this.chairsAssignmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chairsAssignmentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChairsAssignmentDto: UpdateChairsAssignmentDto) {
    return this.chairsAssignmentsService.update(+id, updateChairsAssignmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chairsAssignmentsService.remove(+id);
  }
}
