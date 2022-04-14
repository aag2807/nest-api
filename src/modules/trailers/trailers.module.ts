import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Actor } from 'src/common/entities/actor.entity';
import { Review } from 'src/common/entities/review.entity';
import { ActorRepository } from 'src/repository/actor.repository';
import { ReviewRepository } from 'src/repository/review.repository';
import { Trailer } from '../../common/entities/trailer.entity';
import { TrailerController } from '../../controllers/trailer/trailer.controller';
import { TrailerRepository } from '../../repository/trailer.repository';
import { TrailerService } from '../../services/trailer/trailer.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      TrailerRepository,
      Trailer,
      ReviewRepository,
      Review,
      Actor,
      ActorRepository,
    ]),
  ],
  controllers: [TrailerController],
  providers: [TrailerService],
})
export class TrailersModule {}
