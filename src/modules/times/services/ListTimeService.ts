import { getCustomRepository } from 'typeorm';
import Time from '../typeorm/entities/Time';
import { TimeRepository } from '../typeorm/repositories/TimesRepository';

class ListTimeService {
  public async execute(): Promise<Time[]> {
    const timesRepository = getCustomRepository(TimeRepository);

    const time = timesRepository.find();

    return time;
  }
}

export default ListTimeService;
