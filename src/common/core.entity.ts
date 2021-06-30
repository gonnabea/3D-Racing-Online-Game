// 공통 타입

import { Field, ObjectType } from '@nestjs/graphql';
import { prop } from '@typegoose/typegoose';
import { v4 as uuid } from 'uuid';

const today = new Date();

@ObjectType()
export class CoreEntity {
  @Field(type => String, { defaultValue: uuid(), nullable: true })
  @prop({ required: true, unique: true, default: uuid() })
  id?: string;

  @Field(type => Number, {
    // https://stackoverflow.com/questions/3066586/get-string-in-yyyymmdd-format-from-js-date-object
    defaultValue: today.toISOString().substring(0, 10),
  })
  @prop({
    default: today.toISOString().substring(0, 10),
  })
  createdAt?: string;
}
