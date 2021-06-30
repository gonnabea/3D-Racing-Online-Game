import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { ChatService } from './chat.service';
import { GetLobbyOutput } from './dtos/get-lobby.dto';
import { GetGameRoomInput, GetGameRoomOutput } from './dtos/get-gameRoom.dto';

import { GetP2PInput, GetP2POutput } from './dtos/get-p2p.dto';

@Resolver()
export class ChatResolver {
  constructor(private readonly chatService: ChatService) {}

  // 로비에 해당하는 채팅 목록 가져오기
  @Query(returns => GetLobbyOutput)
  getLobbyChat(): Promise<GetLobbyOutput> {
    return this.chatService.getLobbyChat();
  }

  // 게임룸에 해당하는 채팅 목록 가져오기
  @Query(returns => GetGameRoomOutput)
  getGameRoomChat(
    @Args('input') getGameRoomInput: GetGameRoomInput,
  ): Promise<GetGameRoomOutput> {
    return this.chatService.getGameRoomChat(getGameRoomInput);
  }

  // 특정 유저와의 귓속말에 해당하는 채팅 목록 가져오기
  @Query(returns => GetP2POutput)
  getP2PChat(@Args('input') getP2PInput: GetP2PInput): Promise<GetP2POutput> {
    return this.chatService.getP2PChat(getP2PInput);
  }

  // @AuthUser()
  // @Mutation(returns => CreateChatOutput)
  // createChat(
  //   @Args('input') createChatInput: CreateChatInput,
  // ): Promise<CreateChatOutput> {
  //   return this.chatService.createChat(createChatInput);
  // }
}
