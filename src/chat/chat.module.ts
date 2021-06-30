import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { ChatRoom } from './schemas/chat-room.schema';
import { Chat } from './schemas/chat.schema';
import { ChatResolver } from './chat.resolver';
import { ChatService } from './chat.service';

@Module({
  imports: [TypegooseModule.forFeature([ChatRoom, Chat])],
  providers: [ChatResolver, ChatService],
  exports: [],
})
export class ChatModule {}
