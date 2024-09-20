import { User } from '@/modules/users/schemas/user.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type NotificationDocument = HydratedDocument<Notification>;

@Schema({ timestamps: true })
export class Notification {
    @Prop()
    message: string;

    @Prop({ type: Types.ObjectId, ref: User.name })
    receptionistID: Types.ObjectId;

}

export const NotificationSchema = SchemaFactory.createForClass(Notification);