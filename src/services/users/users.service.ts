import { Injectable } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '../../repository/user.repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  public async verifyUser(username: string, password: string) {
    const user = await this.userRepository.findOne({ username });
    if (!user) return false;
    return user.password === password;
  }

  public async addUser(user: any) {
    const savedUser = await this.userRepository.save(user);
    return savedUser;
  }
}
