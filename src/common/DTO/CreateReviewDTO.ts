import { ApiProperty } from '@nestjs/swagger';

export class CreateReviewDTO {
  @ApiProperty()
  public title: string;

  @ApiProperty()
  public content: string;

  @ApiProperty()
  public rating: number;

  @ApiProperty()
  public trailerId: string;
}
