import { ApiProperty } from '@nestjs/swagger';

export class AddUserDTO {
  @ApiProperty()
  public username: string;

  @ApiProperty()
  public password: string;
}
