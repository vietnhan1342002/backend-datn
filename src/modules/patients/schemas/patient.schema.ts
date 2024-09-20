import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PatientDocument = HydratedDocument<Patient>;

@Schema({ timestamps: true })
export class Patient {
    @Prop({ required: true })
    patientName: string;

    @Prop({ required: true })
    dateOfBirth: Date;

    @Prop({ required: true })
    phonePatient: string;

    @Prop({ required: true })
    emailPatient: string;

    @Prop()
    medical_history: string;
}

export const PatientSchema = SchemaFactory.createForClass(Patient);