import { ApiProperty } from '@nestjs/swagger';
import { Actor } from '../models/actor.model';
import { Review } from '../models/review.model';

export class GetTrailerDTO {
  @ApiProperty()
  public title: string;

  @ApiProperty()
  public director: string;

  @ApiProperty()
  public reviews: Review[];

  @ApiProperty()
  public actors: Actor[];

  @ApiProperty()
  public year: string;

  @ApiProperty()
  public trailerUrl: string;
}
