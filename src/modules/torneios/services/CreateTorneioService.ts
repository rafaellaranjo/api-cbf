import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Torneio from '../typeorm/entities/Torneio';
import { TorneioRepository } from '../typeorm/repositories/TorneiosRepository';

interface IRequest {
  nome: string;
  quantidade_times: number;
  premio: number;
}

class CreateTorneioService {
  public async execute({
    nome,
    quantidade_times,
    premio,
  }: IRequest): Promise<Torneio> {
    const torneiosRepository = getCustomRepository(TorneioRepository);
    const torneioExists = await torneiosRepository.findByName(nome);

    if (torneioExists) {
      throw new AppError('There is already one time with this name');
    }

    const torneio = torneiosRepository.create({
      nome,
      quantidade_times,
      premio,
    });

    await torneiosRepository.save(torneio);

    return torneio;
  }
}

export default CreateTorneioService;
