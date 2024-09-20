// schedule.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument, Types } from 'mongoose';

export type ScheduleDocument = HydratedDocument<Schedule>;

@Schema({ timestamps: true })
export class Schedule extends Document {
  @Prop({ type: Types.ObjectId, ref: 'User' })
  userID: Types.ObjectId;

  @Prop()
  workingDay: Date;

  @Prop()
  shift: string; // 'Sáng', 'Chiều'

  @Prop()
  availability: boolean; // true: có sẵn, false: không có sẵn
}

export const ScheduleSchema = SchemaFactory.createForClass(Schedule);
