import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChairsService } from './chairs.service';
import { CreateChairDto } from './dto/create-chair.dto';
import { UpdateChairDto } from './dto/update-chair.dto';

@Controller('chairs')
export class ChairsController {
  constructor(private readonly chairsService: ChairsService) {}

  @Post()
  create(@Body() createChairDto: CreateChairDto) {
    return this.chairsService.create(createChairDto);
  }

  @Get()
  findAll() {
    return this.chairsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chairsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChairDto: UpdateChairDto) {
    return this.chairsService.update(+id, updateChairDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chairsService.remove(+id);
  }
}
