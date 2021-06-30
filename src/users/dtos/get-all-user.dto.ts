import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/output.dto';
import { User } from '../entities/user.schema';

@ObjectType()
export class GetAllUsersOutput extends CoreOutput {
  @Field(type => [User], { nullable: true })
  users?: User[];
}
