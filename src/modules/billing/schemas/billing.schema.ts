import { Patient } from '@/modules/patients/schemas/patient.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Types } from 'mongoose';

export type BillingDocument = HydratedDocument<Billing>;

@Schema({ timestamps: true })
export class Billing {
    @Prop({ type: Types.ObjectId, ref: Patient.name })
    patient_id: Types.ObjectId;

    @Prop({ required: true })
    total_amount: number;

    @Prop({ required: true })

    payment_status: string; // 'Đã thanh toán', 'Chưa thanh toán'

    @Prop({ required: true })
    payment_date: Date;
}

export const BillingSchema = SchemaFactory.createForClass(Billing);