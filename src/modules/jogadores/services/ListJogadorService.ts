import { getCustomRepository } from 'typeorm';
import Jogador from '../typeorm/entities/Jogador';
import { JogadorRepository } from '../typeorm/repositories/JogadoresRepository';

class ListJogadorService {
  public async execute(): Promise<Jogador[]> {
    const jogadoresRepository = getCustomRepository(JogadorRepository);

    const jogador = jogadoresRepository.find();

    return jogador;
  }
}

export default ListJogadorService;
