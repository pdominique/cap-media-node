using media as db from '../db/schema';

service MediaService {
  entity Pictures as projection on db.Pictures;
}