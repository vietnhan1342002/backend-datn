// prescription.schema.ts
import { Patient } from '@/modules/patients/schemas/patient.schema';
import { User } from '@/modules/users/schemas/user.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument, Types } from 'mongoose';

export type PrescriptionDocument = HydratedDocument<Prescription>;

@Schema({ timestamps: true })
export class Prescription extends Document {
    @Prop({ type: Types.ObjectId, ref: Patient.name })
    patientID: Types.ObjectId;

    @Prop({ type: Types.ObjectId, ref: User.name })
    doctorID: Types.ObjectId;

    @Prop({ type: [String] }) // Danh sách thuốc
    medicines: string[];

    @Prop()
    instructions: string; // Hướng dẫn sử dụng
}

export const PrescriptionSchema = SchemaFactory.createForClass(Prescription);
