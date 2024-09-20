import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { PromotionsService } from './promotions.service';
import { PromotionsController } from './promotions.controller';
import { Promotion, PromotionSchema } from './schemas/promotion.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Promotion.name, schema: PromotionSchema }])],

  controllers: [PromotionsController],
  providers: [PromotionsService],
})
export class PromotionsModule {}
