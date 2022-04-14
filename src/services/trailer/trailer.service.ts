import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTrailerDTO } from '../../common/DTO/CreateTrailerDTO';
import { UpdateTrailerDTO } from '../../common/DTO/UpdateTrailerDTO';
import { ActorRepository } from '../../repository/actor.repository';
import { ReviewRepository } from '../../repository/review.repository';
import { TrailerRepository } from '../../repository/trailer.repository';

@Injectable()
export class TrailerService {
  constructor(
    @InjectRepository(TrailerRepository)
    private readonly trailerRepository: TrailerRepository,
    @InjectRepository(ActorRepository)
    private readonly actorRepository: ActorRepository,
    @InjectRepository(ReviewRepository)
    private readonly reviewRepository: ReviewRepository,
  ) {}

  public async findAll() {
    const trailers: any[] = await this.trailerRepository.find();
    return trailers.map(async (trailer: any) => {
      trailer.actors = await this.getActorsByTrailerId(trailer.id);
      trailer.reviews = await this.getReviewsByTrailerId(trailer.id);
      return trailer;
    });
  }

  public async findOne(id: string) {
    const trailer: any = await this.trailerRepository.findOne(id);
    trailer.actors = await this.getActorsByTrailerId(id);
    trailer.reviews = await this.getReviewsByTrailerId(id);
    return trailer;
  }

  public async create(trailer: CreateTrailerDTO) {
    const savedTrailer = await this.trailerRepository.save(trailer);

    if (trailer.actors) {
      trailer.actors.forEach(async (actor: any) => {
        actor.trailerId = savedTrailer.id;
        await this.actorRepository.save(actor);
      });
    }

    if (trailer.reviews) {
      trailer.reviews.forEach(async (review: any) => {
        review.trailerId = savedTrailer.id;
        await this.reviewRepository.save(review);
      });
    }
  }

  public async update(id: string, trailer: UpdateTrailerDTO) {
    const trailerExists = await this.trailerRepository.findOne(id);

    if (!trailerExists) throw new NotFoundException('Este trailer no existe');

    const reviewsExists = await this.getReviewsByTrailerId(id);
    const actorsExists = await this.getActorsByTrailerId(id);

    if (reviewsExists && trailer.reviews) {
      trailer.reviews.forEach(async (review: any) => {
        this.trailerRepository.update(review.id, review);
      });
    }

    if (actorsExists && trailer.actors) {
      trailer.actors.forEach(async (actor: any) => {
        this.trailerRepository.update(actor.id, actor);
      });
    }

    return await this.trailerRepository.update(id, trailer);
  }

  public async delete(id: string) {
    const trailerExists = await this.trailerRepository.findOne(id);

    if (!trailerExists) throw new NotFoundException('Este trailer no existe');

    const reviewsExists = await this.getReviewsByTrailerId(id);
    const actorsExists = await this.getActorsByTrailerId(id);

    if (reviewsExists) {
      reviewsExists.forEach(async (review: any) => {
        await this.reviewRepository.delete(review.id);
      });
    }

    if (actorsExists) {
      actorsExists.forEach(async (actor: any) => {
        await this.actorRepository.delete(actor.id);
      });
    }

    return await this.trailerRepository.delete(id);
  }

  private async getActorsByTrailerId(id: string) {
    return await this.actorRepository.find({
      where: { trailerId: id },
    });
  }

  private async getReviewsByTrailerId(id: string) {
    const reviews = await this.reviewRepository.find({
      where: { trailerId: id },
    });
    return reviews;
  }
}
