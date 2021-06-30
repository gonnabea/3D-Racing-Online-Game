import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { fromEventPattern } from 'rxjs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { GameRoomModule } from './game-room/game-room.module';
import { ConfigModule } from '@nestjs/config';
import { ChatModule } from './chat/chat.module';
import * as Joi from 'joi';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from './users/entities/user.schema';
import { UsersService } from './users/users.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env.test',
      ignoreEnvFile: process.env.NODE_ENV === 'prod', // prod할 때는 heroku에 따로 넣기로
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('dev', 'prod', 'test')
          .required(),
        SECRET: Joi.string().required(),
        EXPIRE: Joi.string().required(),
      }),
    }),
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      introspection: true,
      autoSchemaFile: true,
    }),
    TypegooseModule.forRoot('mongodb://localhost:27017/nest', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    GameRoomModule,
    ChatModule,
    UsersModule,
    AuthModule,
  ],

  providers: [AppService],
})
export class AppModule {}
