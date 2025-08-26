import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Users } from './schemas/users.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(Users.name) private usersModel: Model<Users>) {}

  async create(createUserDto: CreateUserDto) {
    const newUser = new this.usersModel(createUserDto);
    return newUser.save();
  }

  async findAll() {
    return this.usersModel.find().exec();
  }

  async findOne(id: number) {
    return this.usersModel.findById(id).exec();
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersModel.findByIdAndUpdate(id, updateUserDto).exec();
  }

  async remove(id: number) {
    return this.usersModel.findByIdAndDelete(id).exec();
  }
}
