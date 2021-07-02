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

  public async login({ email, password }: LoginInput): Promise<any | { status: number }> {
    const user = await this.user.findOne({ email });

    // 패스워드 체크
    if(user.password !== password){
      // 패스워드 틀렸을 시
      return {
        ok: false,
        error: `Invalid password. (${HttpStatus.BAD_REQUEST})`,
      
      };
    }else{
      // 패스워드 정확할 때
      return this.validate(user).then(userData => {
        // 매칭되는 유저정보가 없을 때
        if (!userData) {
          return {
            ok: false,
            error: `Invalid email/password. (${HttpStatus.BAD_REQUEST})`,
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

    
  }

  public async register(
    createUserInput: CreateUserInput,
  ): Promise<CreateUserOutput> {
    return await this.usersService.createUser(createUserInput);
  }
}
