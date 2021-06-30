import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { GameRoom } from './schemas/game-room.schema';
import { gameRoomResolver } from './game-room.resolver';
import { GameRoomService } from './game-room.service';

@Module({
  imports: [TypegooseModule.forFeature([GameRoom])],
  providers: [GameRoomService, gameRoomResolver],
  exports: [GameRoomService],
})
export class GameRoomModule {}
