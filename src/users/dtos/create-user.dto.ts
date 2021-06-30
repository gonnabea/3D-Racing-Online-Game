import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { prop } from '@typegoose/typegoose';
import { CoreOutput } from 'src/common/output.dto';
import { User } from '../entities/user.schema';

@InputType()
export class CreateUserInput extends PickType(User, [
  'email',
  'password',
  'nickname',
]) {}

@ObjectType()
export class CreateUserOutput extends CoreOutput {
  @Field(type => User, { nullable: true })
  @prop()
  userData?: User;
}
