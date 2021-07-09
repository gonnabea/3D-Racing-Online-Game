import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { prop } from '@typegoose/typegoose';
import { ChatRoom } from 'src/chat/schemas/chat-room.schema';
import { CoreEntity } from 'src/common/core.entity';
import { User } from 'src/users/entities/user.schema';

// 현재 유저가 접속해있는 방
@ObjectType('GameRoom')
@InputType('GameRoomInput')
export class GameRoom extends CoreEntity {
  @Field(type => [User], {nullable:true})
  @prop()
  userList: User[];

  // 게임 진행 중 or not
  @Field(type => Boolean, {defaultValue:false, nullable:true})
  @prop(type => Boolean)
  playing?: boolean;

  // 최대 유저 입장 수
  @Field(type => Number, {defaultValue:1, nullable:true})
  @prop(type => Number)
  maximumUserNum?: number;

  @Field(type => String)
  @prop(type => String)
  roomName: string;

  // !! 관계 설정 어떻게 하는지 알아보기 !!
  // @Field(type => ChatRoom)
  // @prop()
  // chatRoom: ChatRoom;
}
