import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateChatOutput } from 'src/chat/dtos/create-chat.dto';
import { CreateUserInput } from './dtos/create-user.dto';
import { GetAllUsersOutput } from './dtos/get-all-user.dto';
import { User } from './entities/user.schema';
import { UsersService } from './users.service';

@Resolver(of => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(returns => GetAllUsersOutput)
  async getAllUsers(): Promise<GetAllUsersOutput> {
    return await this.usersService.findAll();
  }
}
