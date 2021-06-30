// 공통 타입

import { Field, ObjectType } from '@nestjs/graphql';
import { prop } from '@typegoose/typegoose';
import { v4 as uuid } from 'uuid';

@ObjectType()
export class CoreEntity {
  @Field(type => String, { defaultValue: uuid(), nullable: true })
  @prop({ required: true, unique: true, default: uuid() })
  id?: string;

  @Field(type => Number, {
    defaultValue: Date.now(),
  })
  @prop({
    default: Date.now(),
  })
  createdAt?: number;
}
