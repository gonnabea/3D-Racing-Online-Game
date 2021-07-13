import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/output.dto';
import { User } from 'src/users/entities/user.schema';

@InputType()
export class RemoveUserInput {
    @Field(type => String)
    token:string
}

@ObjectType()
export class RemoveUserOutput extends CoreOutput {
}
