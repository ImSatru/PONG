import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true }) // crea createdAt y updatedAt
export class Users extends Document {
  @Prop({
    unique: true,
    trim: true,
  })
  username?: string;

  @Prop({
    unique: true,
    trim: true,
    lowercase: true,
  })
  email?: string;

  @Prop({
    minlength: 4,
  })
  password?: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
