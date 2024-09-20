import { Patient } from '@/modules/patients/schemas/patient.schema';
import { User } from '@/modules/users/schemas/user.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type MedicalRecordDocument = HydratedDocument<MedicalRecord>;

@Schema({ timestamps: true })
export class MedicalRecord {
    @Prop({ type: Types.ObjectId, ref: Patient.name, required: true })
    patientID: Types.ObjectId;

    @Prop({ type: Types.ObjectId, ref: User.name, required: true })
    doctorID: Types.ObjectId;

    @Prop({required:true})
    diagnosis: string;

    @Prop({required:true})
    treatment: string;

    @Prop({required:true})
    note: string;
}

export const MedicalRecordSchema = SchemaFactory.createForClass(MedicalRecord);