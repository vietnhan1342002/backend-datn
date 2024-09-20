
import { Patient } from '@/modules/patients/schemas/patient.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type InventoryDocument = HydratedDocument<Inventory>;

@Schema({ timestamps: true })
export class Inventory {
    @Prop({ required: true })
    itemame: string;

    @Prop({ required: true })
    quantity: number;

    @Prop()
    unit: string;

    @Prop()
    status: string; // 'Còn hàng', 'Hết hàng'
}

export const InventorySchema = SchemaFactory.createForClass(Inventory);

