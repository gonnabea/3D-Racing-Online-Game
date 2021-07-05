import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { CoreOutput } from "src/common/output.dto";
import { User } from "src/users/entities/user.schema";


@InputType()
export class GetLoggedUserInput {
    @Field(type => String)
    token:string
}

@ObjectType()
export class GetLoggedUserOutput {
    @Field(type => String, {nullable:true})
    user?:string
}