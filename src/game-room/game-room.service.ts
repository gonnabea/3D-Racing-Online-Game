import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { CreateGameRoomInput, CreateGameRoomOutput } from './dtos/gameRoom.dto';
import { GameRoom } from './schemas/game-room.schema';

@Injectable()
export class GameRoomService {
  constructor(
    @InjectModel(GameRoom)
    private readonly gameRoomModel: ReturnModelType<typeof GameRoom>,
  ) {}
  async findAll(): Promise<GameRoom[]> {
    return await this.gameRoomModel.find().exec();
  }

  async create(createGameRoomInput:CreateGameRoomInput): Promise<CreateGameRoomOutput> {

  }

  async remove(gameRoomId): Promise<boolean> {
    try{
      await this.gameRoomModel.remove(gameRoomId);
    }catch{
      return false
    }finally{
      return true
    }

  }
}
