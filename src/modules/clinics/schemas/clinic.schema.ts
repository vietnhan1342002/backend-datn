import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type ClinicDocument = HydratedDocument<Clinic>;

@Schema({ timestamps: true })
export class Clinic {
    @Prop({ required: true })
    clinicName: string;  // Tên Clinic, ví dụ: "admin", "user"

    @Prop({ required: true })
    address: string;

    @Prop()
    clinicPhone: string;

    @Prop()
    clinicEmail: string;
}

export const ClinicSchema = SchemaFactory.createForClass(Clinic);