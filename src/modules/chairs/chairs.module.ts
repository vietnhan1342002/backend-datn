import { Module } from '@nestjs/common';
import { ChairsService } from './chairs.service';
import { ChairsController } from './chairs.controller';

@Module({
  controllers: [ChairsController],
  providers: [ChairsService],
})
export class ChairsModule {}
