import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true }) 
export class Users  {
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
