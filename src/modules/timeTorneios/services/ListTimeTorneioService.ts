import { getCustomRepository } from 'typeorm';
import TimeTorneio from '../typeorm/entities/TimeTorneio';
import { TimeTorneioRepository } from '../typeorm/repositories/TimeTorneioRepository';

class ListTimeTorneioService {
  public async execute(): Promise<TimeTorneio[]> {
    const timeTorneiosRepository = getCustomRepository(TimeTorneioRepository);

    const timeTorneio = timeTorneiosRepository.find();

    return timeTorneio;
  }
}

export default ListTimeTorneioService;
