import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { GameRoom } from './schemas/game-room.schema';
import { GameRoomService } from './game-room.service';

@Resolver(of => GameRoom)
export class gameRoomResolver {
  constructor(private readonly gameRoomService: GameRoomService) {}

  @Query(returns => [GameRoom])
  getAllGameRoom(): Promise<GameRoom[]> {
    return this.gameRoomService.findAll();
  }

  @Mutation(returns => Boolean)
  removeGameRoom(gameRoomId: string): Promise<boolean> {
    return this.gameRoomService.remove(gameRoomId);
  }
}
