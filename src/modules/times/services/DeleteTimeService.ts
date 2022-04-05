import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { TimeRepository } from '../typeorm/repositories/TimesRepository';

interface IRequest {
  id: string;
}

class DeleteTimeService {
  public async execute({ id }: IRequest): Promise<void> {
    const timesRepository = getCustomRepository(TimeRepository);

    const time = await timesRepository.findOne(id);

    if (!time) {
      throw new AppError('Time not found.');
    }

    await timesRepository.remove(time);
  }
}

export default DeleteTimeService;
