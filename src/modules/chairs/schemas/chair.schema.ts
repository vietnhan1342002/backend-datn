
import { Patient } from '@/modules/patients/schemas/patient.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type ChairDocument = HydratedDocument<Chair>;

@Schema({ timestamps: true })
export class Chair {
    @Prop({ required: true })
    chairNumber: string;
  
    @Prop()
    status: string; // 'Có sẵn', 'Đang sử dụng'
  
    @Prop()
    room: string; // Phòng khám
}

export const ChairSchema = SchemaFactory.createForClass(Chair);

