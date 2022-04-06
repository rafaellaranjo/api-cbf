import { getCustomRepository } from 'typeorm';
import Torneio from '../typeorm/entities/Torneio';
import { TorneioRepository } from '../typeorm/repositories/TorneiosRepository';

class ListTorneioService {
  public async execute(): Promise<Torneio[]> {
    const torneiosRepository = getCustomRepository(TorneioRepository);

    const torneio = torneiosRepository.find();

    return torneio;
  }
}

export default ListTorneioService;
