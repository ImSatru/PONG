import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { GameModule } from './game/game.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UsersModule, GameModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
