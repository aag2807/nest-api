import { ApiProperty } from '@nestjs/swagger';

export class UpdateActorDTO {
  @ApiProperty()
  public id: string;

  @ApiProperty()
  public name: string;

  @ApiProperty()
  public dateOfBirth: Date;

  @ApiProperty()
  public description: string;

  @ApiProperty()
  public trailerId: string;
}
