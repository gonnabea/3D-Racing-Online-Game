import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { prop } from '@typegoose/typegoose';
import { CoreEntity } from 'src/common/core.entity';

// 채팅 말풍선 모델
@ObjectType('Chat')
@InputType('ChatInput')
export class Chat extends CoreEntity {
  @Field(type => String)
  @prop()
  createdBy: string;

  @Field(type => String)
  @prop(type => String)
  content: string;

  @Field(type => Number)
  @prop()
  chatRoomId?: number;

  @Field(type => Boolean)
  @prop()
  isLobby: boolean;
}
