import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../common/entities/user.entity';
import { UserController } from '../../controllers/users/user.controller';
import { UserRepository } from '../../repository/user.repository';
import { UsersService } from '../../services/users/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository, User])],
  controllers: [UserController],
  providers: [UsersService],
})
export class UsersModule {}
