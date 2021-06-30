import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/output.dto';
import { User } from '../entities/user.schema';

@InputType()
export class FindByEmailInput extends PickType(User, ['email']) {}

@ObjectType()
export class FindByEmailOutput extends PickType(User, [
  'email',
  'nickname',
  'password',
]) {}
