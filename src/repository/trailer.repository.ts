import { Trailer } from 'src/common/entities/trailer.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Trailer)
export class TrailerRepository extends Repository<Trailer> {}
