import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateChatOutput } from 'src/chat/dtos/create-chat.dto';
import { CreateUserInput } from './dtos/create-user.dto';
import { GetAllUsersOutput } from './dtos/get-all-user.dto';
import { PostAvatarImgInput, PostAvatarImgOutput } from './dtos/user-avatar.dto';
import { User } from './entities/user.schema';
import { UsersService } from './users.service';

@Resolver(of => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  // 모든 유저 리스트 불러오기.
  @Query(returns => GetAllUsersOutput)
  async getAllUsers(): Promise<GetAllUsersOutput> {
    return await this.usersService.findAll();
  }

  // 유저 아바타 이미지 등록 & 변경.
  @Mutation(returns => PostAvatarImgOutput)
  async postAvatarImg(): Promise<PostAvatarImgOutput> {
    return await this.usersService.postAvatarImg(PostAvatarImgInput);
  }
}
