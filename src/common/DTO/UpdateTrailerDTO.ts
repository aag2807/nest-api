import { ApiProperty } from '@nestjs/swagger';
import { UpdateActorDTO } from './UpdateActorDTO';
import { UpdateReviewDTO } from './UpdateReviewDTO';

export class UpdateTrailerDTO {
  @ApiProperty()
  public title: string;

  @ApiProperty()
  public director: string;

  @ApiProperty()
  public year: string;

  @ApiProperty()
  public trailerUrl: string;

  @ApiProperty()
  public reviews: UpdateReviewDTO[];

  @ApiProperty()
  public actors: UpdateActorDTO[];
}
