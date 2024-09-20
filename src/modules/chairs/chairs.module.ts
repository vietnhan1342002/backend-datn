import { Module } from '@nestjs/common';
import { ChairsService } from './chairs.service';
import { ChairsController } from './chairs.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Chair, ChairSchema } from './schemas/chair.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Chair.name, schema: ChairSchema }])],
  controllers: [ChairsController],
  providers: [ChairsService],
})
export class ChairsModule {}
