import { Actor } from './actor.model';
import { Review } from './review.model';

export interface Trailer {
  id: number;
  title: string;
  director: string;
  review?: Review[];
  actors?: Actor[];
  year: string;
  trailerUrl: string;
}
