import { ApiProperty } from '@nestjs/swagger';

export class CreateActorDTO {
  @ApiProperty()
  public name: string;

  @ApiProperty()
  public dateOfBirth: Date;

  @ApiProperty()
  public description: string;

  @ApiProperty()
  public trailerId: string;
}
