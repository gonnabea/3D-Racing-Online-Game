import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { ConfigService } from '@nestjs/config';
import { User } from './entities/user.schema';
import { TypegooseModule } from 'nestjs-typegoose';

@Module({
  imports: [ConfigService, TypegooseModule.forFeature([User])],
  providers: [UsersService, UsersResolver],
  exports: [UsersService],
})
export class UsersModule {}
