import { Injectable } from '@nestjs/common';
import knexInstance from '../knex/knex';

export interface Venue {
  id: number;
  name: string;
  country_iso2: string;
  state: string;
  city: string;
}

@Injectable()
export class AppService {
  async getVenues(limit: number = 20): Promise<Venue[]> {
    if (isNaN(limit) || +limit < 0) {
      limit = 20;
    }

    return await knexInstance.select<Venue[]>().from('venues').limit(limit);
  }
}
