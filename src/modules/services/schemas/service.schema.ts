// service.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

export type ServiceDocument = HydratedDocument<Service>;

@Schema({ timestamps: true })
export class Service extends Document {
  @Prop({ required: true })
  serviceName: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  price: number;

  @Prop()
  category: string; // Ví dụ: 'Khám', 'Điều trị'
}

export const ServiceSchema = SchemaFactory.createForClass(Service);
