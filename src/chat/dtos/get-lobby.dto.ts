import { Field, ObjectType } from '@nestjs/graphql';
import { prop } from '@typegoose/typegoose';
import { CoreOutput } from 'src/common/output.dto';
import { Chat } from '../schemas/chat.schema';

@ObjectType()
export class GetLobbyOutput extends CoreOutput {
  @Field(type => [Chat], { nullable: true })
  @prop()
  chats?: Chat[];
}
