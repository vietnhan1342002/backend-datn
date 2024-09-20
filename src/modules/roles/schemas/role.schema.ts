import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type RoleDocument = HydratedDocument<Role>;

@Schema({ timestamps: true })
export class Role {
    @Prop({ required: true })
    nameRole: string;  // Tên role, ví dụ: "admin", "user"

    @Prop({ type: [String], default: [] })
    permissions: string[];  // Danh sách quyền dưới dạng chuỗi, ví dụ: ["create_user", "delete_post"]
}

export const RoleSchema = SchemaFactory.createForClass(Role);