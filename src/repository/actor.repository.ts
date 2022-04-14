import { Actor } from 'src/common/entities/actor.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Actor)
export class ActorRepository extends Repository<Actor> {}
