import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { TransferenciaRepository } from '../typeorm/repositories/TransferenciasRepository';

interface IRequest {
  id: string;
}

class DeleteTransferenciaService {
  public async execute({ id }: IRequest): Promise<void> {
    const transferenciasRepository = getCustomRepository(
      TransferenciaRepository,
    );

    const jogador = await transferenciasRepository.findOne(id);

    if (!jogador) {
      throw new AppError('Transferência not found.');
    }

    await transferenciasRepository.remove(jogador);
  }
}

export default DeleteTransferenciaService;
