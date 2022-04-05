import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { JogadorRepository } from '../typeorm/repositories/JogadoresRepository';

interface IRequest {
  id: string;
}

class DeleteJogadorService {
  public async execute({ id }: IRequest): Promise<void> {
    const jogadoresRepository = getCustomRepository(JogadorRepository);

    const jogador = await jogadoresRepository.findOne(id);

    if (!jogador) {
      throw new AppError('Jogador not found.');
    }

    await jogadoresRepository.remove(jogador);
  }
}

export default DeleteJogadorService;
