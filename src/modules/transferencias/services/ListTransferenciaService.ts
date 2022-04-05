import { getCustomRepository } from 'typeorm';
import Transferencia from '../typeorm/entities/Transferencia';
import { TransferenciaRepository } from '../typeorm/repositories/TransferenciasRepository';

class ListTransferenciaService {
  public async execute(): Promise<Transferencia[]> {
    const transferenciasRepository = getCustomRepository(
      TransferenciaRepository,
    );

    const transferencia = transferenciasRepository.find();

    return transferencia;
  }
}

export default ListTransferenciaService;
