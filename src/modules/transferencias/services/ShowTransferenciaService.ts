import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Transferencia from '../typeorm/entities/Transferencia';
import { TransferenciaRepository } from '../typeorm/repositories/TransferenciasRepository';

interface IRequest {
  id: string;
}

class ShowTransferenciaService {
  public async execute({ id }: IRequest): Promise<Transferencia> {
    const transferenciasRepository = getCustomRepository(
      TransferenciaRepository,
    );

    const transferencia = await transferenciasRepository.findOne(id);

    if (!transferencia) {
      throw new AppError('Transferencia not found.');
    }

    return transferencia;
  }
}

export default ShowTransferenciaService;
