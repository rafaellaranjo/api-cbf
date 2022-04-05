import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Jogador from '../typeorm/entities/Jogador';
import { JogadorRepository } from '../typeorm/repositories/JogadoresRepository';

interface IRequest {
  id: string;
}

class ShowJogadorService {
  public async execute({ id }: IRequest): Promise<Jogador> {
    const jogadoresRepository = getCustomRepository(JogadorRepository);

    const jogador = await jogadoresRepository.findOne(id);

    if (!jogador) {
      throw new AppError('Jogador not found.');
    }

    return jogador;
  }
}

export default ShowJogadorService;
