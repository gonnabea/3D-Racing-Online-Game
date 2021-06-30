import { HttpStatus, Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.schema';
import { UsersService } from 'src/users/users.service';
import * as jwt from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';
import {
  CreateUserInput,
  CreateUserOutput,
} from 'src/users/dtos/create-user.dto';
import { CoreOutput } from 'src/common/output.dto';
import { LoginInput } from './dtos/login.dto';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly config: ConfigService,
    @InjectModel(User)
    private readonly user: ReturnModelType<typeof User>,
  ) {}

  private async validate(userData: User): Promise<User> {
    const validatedUser = await this.usersService.findByEmail(userData);
    if (validatedUser) {
      return validatedUser;
    }
  }

  public async login({ email }: LoginInput): Promise<any | { status: number }> {
    const user = await this.user.findOne({ email });

    return this.validate(user).then(userData => {
      // 매칭되는 유저정보가 없을 때
      if (!userData) {
        return {
          status: HttpStatus.BAD_REQUEST,
          message: 'Invalid email/password',
        };
      }
      // const payload = { id: userData.id, nickname: userData.nickname };
      const payload = { nickname: userData.nickname };

      const accessToken = jwt.sign(payload, this.config.get('SECRET'), {
        expiresIn: this.config.get('EXPIRE'),
      });
      return {
        ok: true,
        token: accessToken,
      };
    });
  }

  public async register(
    createUserInput: CreateUserInput,
  ): Promise<CreateUserOutput> {
    return await this.usersService.createUser(createUserInput);
  }
}
