import { ApiProperty } from '@nestjs/swagger';

export class UpdateReviewDTO {
  @ApiProperty()
  public id: string;

  @ApiProperty()
  public title: string;

  @ApiProperty()
  public content: string;

  @ApiProperty()
  public rating: number;

  @ApiProperty()
  public trailerId: string;
}
