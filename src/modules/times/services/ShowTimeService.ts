import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Time from '../typeorm/entities/Time';
import { TimeRepository } from '../typeorm/repositories/TimesRepository';

interface IRequest {
  id: string;
}

class ShowTimeService {
  public async execute({ id }: IRequest): Promise<Time> {
    const timesRepository = getCustomRepository(TimeRepository);

    const time = await timesRepository.findOne(id);

    if (!time) {
      throw new AppError('Time not found.');
    }

    return time;
  }
}

export default ShowTimeService;
