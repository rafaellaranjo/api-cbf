import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { TimeTorneioRepository } from '../typeorm/repositories/TimeTorneioRepository';

interface IRequest {
  id: string;
}

class DeleteTimeTorneioService {
  public async execute({ id }: IRequest): Promise<void> {
    const timeTorneiosRepository = getCustomRepository(TimeTorneioRepository);

    const timeTorneio = await timeTorneiosRepository.findOne(id);

    if (!timeTorneio) {
      throw new AppError('TimeTorneio not found.');
    }

    await timeTorneiosRepository.remove(timeTorneio);
  }
}

export default DeleteTimeTorneioService;
