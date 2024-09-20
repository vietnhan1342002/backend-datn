import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChairAssignmentsService } from './chair-assignments.service';
import { CreateChairAssignmentDto } from './dto/create-chair-assignment.dto';
import { UpdateChairAssignmentDto } from './dto/update-chair-assignment.dto';

@Controller('chair-assignments')
export class ChairAssignmentsController {
  constructor(private readonly chairAssignmentsService: ChairAssignmentsService) {}

  @Post()
  create(@Body() createChairAssignmentDto: CreateChairAssignmentDto) {
    return this.chairAssignmentsService.create(createChairAssignmentDto);
  }

  @Get()
  findAll() {
    return this.chairAssignmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chairAssignmentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChairAssignmentDto: UpdateChairAssignmentDto) {
    return this.chairAssignmentsService.update(+id, updateChairAssignmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chairAssignmentsService.remove(+id);
  }
}
