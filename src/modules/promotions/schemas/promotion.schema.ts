// promotion.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

export type PromotionDocument = HydratedDocument<Promotion>;

@Schema({ timestamps: true })
export class Promotion extends Document {
  @Prop({ required: true })
  promotionName: string;

  @Prop()
  description: string;

  @Prop()
  discount: number; // Phần trăm khuyến mãi

  @Prop()
  validUntil: Date; // Thời gian hết hạn
}

export const PromotionSchema = SchemaFactory.createForClass(Promotion);
