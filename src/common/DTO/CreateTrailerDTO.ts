import { ApiProperty } from '@nestjs/swagger';
import { Actor } from '../models/actor.model';
import { Review } from '../models/review.model';
import { CreateActorDTO } from './CreateActorDTO';
import { CreateReviewDTO } from './CreateReviewDTO';

export class CreateTrailerDTO {
  @ApiProperty()
  public title: string;

  @ApiProperty()
  public director: string;

  @ApiProperty()
  public reviews: CreateReviewDTO[];

  @ApiProperty()
  public actors: CreateActorDTO[];

  @ApiProperty()
  public year: string;

  @ApiProperty()
  public trailerUrl: string;
}
