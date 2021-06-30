import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/output.dto';
import { ChatRoom } from '../schemas/chat-room.schema';

@InputType()
export class CreateChatInput extends PickType(ChatRoom, ['id']) {}

@ObjectType()
export class CreateChatOutput extends CoreOutput {}
