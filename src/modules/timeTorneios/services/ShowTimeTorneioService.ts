import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import TimeTorneio from '../typeorm/entities/TimeTorneio';
import { TimeTorneioRepository } from '../typeorm/repositories/TimeTorneioRepository';

interface IRequest {
  id: string;
}

class ShowTimeTorneioService {
  public async execute({ id }: IRequest): Promise<TimeTorneio> {
    const timeTorneiosRepository = getCustomRepository(TimeTorneioRepository);

    const timeTorneio = await timeTorneiosRepository.findOne(id);

    if (!timeTorneio) {
      throw new AppError('TimeTorneio not found.');
    }

    return timeTorneio;
  }
}

export default ShowTimeTorneioService;
