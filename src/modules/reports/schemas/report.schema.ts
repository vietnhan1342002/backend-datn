// report.schema.ts
import { User } from '@/modules/users/schemas/user.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Types } from 'mongoose';

export type ReportDocument = HydratedDocument<Report>;

@Schema({ timestamps: true })
export class Report extends Document {
    @Prop()
    reportType: string; // Ví dụ: 'Doanh thu', 'Dịch vụ'

    @Prop({ type: Types.ObjectId, ref: User.name })
    generatedBy: Types.ObjectId; // Người tạo báo cáo

    @Prop({ type: Object })
    data: any; // Dữ liệu báo cáo
}

export const ReportSchema = SchemaFactory.createForClass(Report);
