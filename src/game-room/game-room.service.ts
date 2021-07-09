import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { User } from 'src/users/entities/user.schema';
import { UsersService } from 'src/users/users.service';
import { CreateGameRoomInput, CreateGameRoomOutput } from './dtos/gameRoom.dto';
import { GameRoom } from './schemas/game-room.schema';

@Injectable()
export class GameRoomService {
  constructor(
    @InjectModel(GameRoom)
    private readonly gameRoomModel: ReturnModelType<typeof GameRoom>,
    @InjectModel(User)
    private readonly user: ReturnModelType<typeof User>,
  ) {}
  async findAll(): Promise<GameRoom[]> {
    return await this.gameRoomModel.find().exec();
  }

  async create({maximumUserNum,roomName,accessToken}:CreateGameRoomInput): Promise<CreateGameRoomOutput> {
    try{
      const loggedUser = await UsersService.getLoggedUser(accessToken)
      if(loggedUser && typeof loggedUser !== 'string'){
        const roomCreator = await this.user.findOne({email:loggedUser.email}); // 게임방 생성 시 방장
        await this.gameRoomModel.create({
          maximumUserNum,
          roomName,
          userList:[roomCreator]
        })
        return {
          ok: true
        }
      }
      else{
       return {
         ok:false,
         error: "로그인된 유저가 없습니다."
       } 
      }
    }catch(error){
      return {
        ok:false,
        error
      }
    }
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
