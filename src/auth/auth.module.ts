import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from 'src/users/entities/user.schema';

@Module({
  imports: [TypegooseModule.forFeature([User])],
  providers: [AuthResolver, AuthService, UsersService],
})
export class AuthModule {}
