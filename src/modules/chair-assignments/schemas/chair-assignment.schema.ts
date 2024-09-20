// chair-assignment.schema.ts
import { Appointment } from '@/modules/appointments/schemas/appointment.schema';
import { Chair } from '@/modules/chairs/schemas/chair.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument, Types } from 'mongoose';

export type ChairAssignmentDocument = HydratedDocument<ChairAssignment>;

@Schema({ timestamps: true })
export class ChairAssignment extends Document {
    @Prop({ type: Types.ObjectId, ref: Appointment.name })
    appointment_id: Types.ObjectId;

    @Prop({ type: Types.ObjectId, ref: Chair.name })
    chair_id: Types.ObjectId;
}

export const ChairAssignmentSchema = SchemaFactory.createForClass(ChairAssignment);
