import { Review } from 'src/common/entities/review.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Review)
export class ReviewRepository extends Repository<Review> {}
