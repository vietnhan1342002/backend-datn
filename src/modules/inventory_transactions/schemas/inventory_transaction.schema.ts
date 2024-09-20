import { Inventory } from '@/modules/inventory/schemas/inventory.schema';
import { Patient } from '@/modules/patients/schemas/patient.schema';
import { User } from '@/modules/users/schemas/user.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type InventoryTransactionsDocument = HydratedDocument<InventoryTransactions>;

@Schema({ timestamps: true })
export class InventoryTransactions {
    @Prop({ type: Types.ObjectId, ref: Inventory.name })
    itemID: Types.ObjectId;

    @Prop()
    transaction_type: string; // 'Nhập', 'Xuất'

    @Prop()
    quantity: number;

    @Prop()
    date: Date;

    @Prop({ type: Types.ObjectId, ref: User.name })
    userID: Types.ObjectId; // Người thực hiện giao dịch
}

export const InventoryTransactionsSchema = SchemaFactory.createForClass(InventoryTransactions);