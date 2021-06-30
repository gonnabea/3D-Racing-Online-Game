import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { prop } from '@typegoose/typegoose';
import { CoreOutput } from 'src/common/output.dto';
import { Chat } from '../schemas/chat.schema';

@InputType()
export class GetP2PInput {
  // PickType이 작동되지 않아 임시 조치
  @Field(type => String)
  userId: string;
}

@ObjectType()
export class GetP2POutput extends CoreOutput {
  @Field(type => [Chat], { nullable: true })
  @prop()
  chats?: Chat[];
}
