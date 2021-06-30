import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from 'src/common/core.entity';
import { GameRoom } from 'src/game-room/schemas/game-room.schema';
import { User } from 'src/users/entities/user.schema';
import { Chat } from './chat.schema';
import { prop } from 'typegoose';

// 현재 유저가 접속해있는 방
@ObjectType('ChatRoom')
@InputType('ChatRoomInput')
export class ChatRoom extends CoreEntity {
  @Field(type => [User])
  @prop()
  userList: User[];

  @Field(type => GameRoom)
  gameRoom: GameRoom;

  @Field(type => [Chat])
  @prop()
  chat?: Chat[];
}
