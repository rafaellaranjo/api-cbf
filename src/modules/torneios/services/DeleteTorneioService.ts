import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { TorneioRepository } from '../typeorm/repositories/TorneiosRepository';

interface IRequest {
  id: string;
}

class DeleteTorneioService {
  public async execute({ id }: IRequest): Promise<void> {
    const torneiosRepository = getCustomRepository(TorneioRepository);

    const torneio = await torneiosRepository.findOne(id);

    if (!torneio) {
      throw new AppError('Torneio not found.');
    }

    await torneiosRepository.remove(torneio);
  }
}

export default DeleteTorneioService;
