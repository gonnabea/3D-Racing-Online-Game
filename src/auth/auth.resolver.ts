import { Body, Controller, Post } from '@nestjs/common';
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { any } from 'joi';
import {
  CreateUserInput,
  CreateUserOutput,
} from 'src/users/dtos/create-user.dto';
import { User } from 'src/users/entities/user.schema';
import { AuthService } from './auth.service';
import { LoginInput, LoginOutput } from './dtos/login.dto';
import { RemoveUserInput, RemoveUserOutput } from './dtos/removeUser.dto';

@Resolver(of => User)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(returns => LoginOutput)
  async login(@Args('input') loginInput: LoginInput): Promise<any> {
    return this.authService.login(loginInput);
  }

  @Mutation(returns => CreateUserOutput)
  async register(
    @Args('input') createUserInput: CreateUserInput,
  ): Promise<CreateUserOutput> {
    return this.authService.register(createUserInput);
  }

  @Mutation(returns => RemoveUserOutput)
  async removeUser(
    @Args('input') removeUserInput:RemoveUserInput
  ): Promise<RemoveUserOutput> {
    return this.authService.removeUser(removeUserInput)
  }
}
