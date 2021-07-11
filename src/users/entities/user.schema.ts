import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { getModelForClass, prop } from '@typegoose/typegoose';
import { CoreEntity } from 'src/common/core.entity';
import { GameRoom } from 'src/game-room/schemas/game-room.schema';

export enum UserRole {
  Player = 'Player',
  Operator = 'Operator'
}

@InputType('UserInputType')
@ObjectType()
export class User extends CoreEntity {
  @Field(type => String)
  @prop()
  email: string;

  @Field(type => String)
  @prop()
  nickname: string;

  @Field(type => String)
  @prop()
  password: string;

  @Field(type => [Number], { nullable: true })
  @prop()
  carList?: number[];

  @Field(type => Number, { nullable: true })
  @prop()
  gameMoney?: number;

  @Field(type => Number, { nullable: true })
  @prop()
  level?: number;

  // 경험치
  @Field(type => Number, { nullable: true })
  @prop()
  exp?: number;

  @Field(type => String, { nullable: true })
  @prop()
  avatarUrl?: string;

  // 현재 접속 중인 게임방
  @Field(type => GameRoom, { nullable: true})
  @prop()
  gameRoom?: GameRoom;
}
