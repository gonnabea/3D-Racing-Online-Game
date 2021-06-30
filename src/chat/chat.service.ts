import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { CreateChatInput, CreateChatOutput } from './dtos/create-chat.dto';
import { GetGameRoomInput } from './dtos/get-gameRoom.dto';
import { GetP2PInput, GetP2POutput } from './dtos/get-p2p.dto';
import { ChatRoom } from './schemas/chat-room.schema';
import { Chat } from './schemas/chat.schema';

@Injectable()
export class ChatService {
  constructor(
    @InjectModel(ChatRoom)
    private readonly chatRoomModel: ReturnModelType<typeof ChatRoom>,
    @InjectModel(Chat)
    private readonly chatModel: ReturnModelType<typeof Chat>,
  ) {}

  // 로비에 해당하는 채팅 목록 가져오기
  async getLobbyChat() {
    try {
      const chats = await this.chatModel.find({ isLobby: true });
      if (chats) {
        return {
          ok: true,
          chats,
        };
      } else {
        return {
          ok: false,
          error:
            'Error: Cannot find chats / 오류: 채팅 기록을 찾을 수 없습니다.',
        };
      }
    } catch {
      return {
        ok: false,
        error:
          'Error: Error occured while trying to get chat list. Please let administrator know. / 오류: 채팅 조회 중 오류가 발생했습니다. 관리자에게 문의해주세요.',
      };
    }
  }

  // 게임룸에 해당하는 채팅 목록 가져오기
  async getGameRoomChat({ chatRoomId }: GetGameRoomInput) {
    try {
      const chats = await this.chatModel.find({ id: chatRoomId });
      if (chats) {
        return {
          ok: true,
          chats,
        };
      } else {
        return {
          ok: false,
          error:
            'Error: Cannot find chats / 오류: 채팅 기록을 찾을 수 없습니다.',
        };
      }
    } catch {
      return {
        ok: false,
        error:
          'Error: Error occured while trying to get chat list. Please let administrator know. / 오류: 채팅 조회 중 오류가 발생했습니다. 관리자에게 문의해주세요.',
      };
    }
  }

  // 귓속말에 해당하는 채팅 목록 가져오기
  async getP2PChat({ userId }: GetP2PInput) {
    try {
      // 굳이 이렇게 두 번이나 DB조회를 해야하는가?
      const chatRoom = await this.chatRoomModel.findOne({ id: userId });
      const chats = await this.chatModel.find({ chatRoomId: chatRoom.id });
      if (chats) {
        return {
          ok: true,
          chats,
        };
      } else {
        return {
          ok: false,
          error:
            'Error: Cannot find chats / 오류: 채팅 기록을 찾을 수 없습니다.',
        };
      }
    } catch {
      return {
        ok: false,
        error:
          'Error: Error occured while trying to get chat list. Please let administrator know. / 오류: 채팅 조회 중 오류가 발생했습니다. 관리자에게 문의해주세요.',
      };
    }
  }

  // async createChat(
  //   createChatInput: CreateChatInput,
  // ): Promise<CreateChatOutput> {
  //   try {
  //   } catch {}
  // }
}
