import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GameRoom } from './schemas/game-room.schema';
import { GameRoomService } from './game-room.service';
import { CreateGameRoomInput, CreateGameRoomOutput } from './dtos/gameRoom.dto';

@Resolver(of => GameRoom)
export class gameRoomResolver {
  constructor(private readonly gameRoomService: GameRoomService) {}

  @Query(returns => [GameRoom])
  getAllGameRoom(): Promise<GameRoom[]> {
    return this.gameRoomService.findAll();
  }

  @Mutation(returns => CreateGameRoomOutput)
  createGameRoom(@Args('input') createGameRoomInput:CreateGameRoomInput):Promise<CreateGameRoomOutput> {
    return this.gameRoomService.create(createGameRoomInput)
  }

  @Mutation(returns => Boolean)
  removeGameRoom(@Args('input') gameRoomId: string): Promise<boolean> {
    return this.gameRoomService.remove(gameRoomId);
  }
}
