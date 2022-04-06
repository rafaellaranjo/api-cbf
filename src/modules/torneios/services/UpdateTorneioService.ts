import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Torneio from '../typeorm/entities/Torneio';
import { TorneioRepository } from '../typeorm/repositories/TorneiosRepository';

interface IRequest {
  id: string;
  nome: string;
  quantidade_times: number;
  premio: number;
}

class UpdateTorneioService {
  public async execute({
    id,
    nome,
    quantidade_times,
    premio,
  }: IRequest): Promise<Torneio> {
    const torneiosRepository = getCustomRepository(TorneioRepository);

    const torneio = await torneiosRepository.findOne(id);

    if (!torneio) {
      throw new AppError('Torneio not found.');
    }

    const torneioExists = await torneiosRepository.findByName(nome);

    if (torneioExists && nome !== torneio.nome) {
      throw new AppError('There is already one torneio with this name');
    }

    torneio.nome = nome;
    torneio.quantidade_times = quantidade_times;
    torneio.premio = premio;

    await torneiosRepository.save(torneio);

    return torneio;
  }
}

export default UpdateTorneioService;
