import { Patient } from '@/modules/patients/schemas/patient.schema';
import { Schedule } from '@/modules/schedules/schemas/schedule.schema';
import { User } from '@/modules/users/schemas/user.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type AppointmentDocument = HydratedDocument<Appointment>;

enum AppointmentStatus {
    PENDING = 'Đang chờ',
    COMPLETED = 'Đã hoàn thành',
}

@Schema({ timestamps: true })
export class Appointment {
    @Prop({ type: Types.ObjectId, ref: Patient.name, required: true })
    patientID: Types.ObjectId;

    @Prop({ type: Types.ObjectId, ref: User.name, required: true })
    doctorID: Types.ObjectId;

    @Prop({ type: Types.ObjectId, ref: Schedule.name, required: true })
    schedule: Types.ObjectId;

    @Prop({ required: true })
    appointmentDate: Date;

    @Prop({ required: true, enum: AppointmentStatus })  // Sử dụng enum rõ ràng
    status: AppointmentStatus;
}

export const AppointmentSchema = SchemaFactory.createForClass(Appointment);
