import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/output.dto';
import { User } from '../entities/user.schema';

@InputType()
export class PostAvatarImgInput extends CoreOutput {
  @Field(type => String, { defaultValue:"./resources/default_avatar.jpg", nullable:true })
  avatarImg?:string;
}

@ObjectType()
export class PostAvatarImgOutput extends CoreOutput {
    
}