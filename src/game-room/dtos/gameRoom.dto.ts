import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { prop } from '@typegoose/typegoose';
import { CoreOutput } from 'src/common/output.dto';
import { GameRoom } from '../schemas/game-room.schema';


@InputType()
export class CreateGameRoomInput extends PickType(GameRoom, [
  'maximumUserNum',
  'roomname'
]) {}

@ObjectType()
export class CreateGameRoomOutput extends CoreOutput {}
