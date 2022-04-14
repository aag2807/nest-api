/* eslint-disable @typescript-eslint/no-empty-function */
import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AddUserDTO } from 'src/common/DTO/AddUserDTO';
import { UsersService } from 'src/services/users/users.service';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private userService: UsersService) {}

  @Post('verify')
  async verifyUser(@Body() user: AddUserDTO) {
    const isUser = await this.userService.verifyUser(
      user.username,
      user.password,
    );
    return isUser;
  }

  @Post('add')
  async addUser(@Body() user: AddUserDTO) {
    const savedUser = await this.userService.addUser(user);
    return savedUser;
  }
}
