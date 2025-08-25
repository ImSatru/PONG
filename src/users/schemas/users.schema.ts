
import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
@Schema()
export class Users {
    @Prop({
        unique: true,
        auto: true,
    })
    id?: Number;

    @Prop({
        trim: true,
    })
    username?: string;

    @Prop({
        trim: true,
    })
    email?: string;

    @Prop()
    password?: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);