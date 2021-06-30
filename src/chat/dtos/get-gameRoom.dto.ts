import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { prop } from '@typegoose/typegoose';
import { CoreOutput } from 'src/common/output.dto';
import { Chat } from '../schemas/chat.schema';

@InputType()
export class GetGameRoomInput {
  // PickType이 작동되지 않아 임시 조치
  @Field(type => String)
  chatRoomId: string;
}

@ObjectType()
export class GetGameRoomOutput extends CoreOutput {
  @Field(type => [Chat], { nullable: true })
  @prop()
  chats?: Chat[];
}
