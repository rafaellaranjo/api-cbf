import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Torneio from '../typeorm/entities/Torneio';
import { TorneioRepository } from '../typeorm/repositories/TorneiosRepository';

interface IRequest {
  id: string;
}

class ShowTorneioService {
  public async execute({ id }: IRequest): Promise<Torneio> {
    const torneiosRepository = getCustomRepository(TorneioRepository);

    const torneio = await torneiosRepository.findOne(id);

    if (!torneio) {
      throw new AppError('Torneio not found.');
    }

    return torneio;
  }
}

export default ShowTorneioService;
