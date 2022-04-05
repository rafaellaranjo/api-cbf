import { TimeRepository } from '@modules/times/typeorm/repositories/TimesRepository';
import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Transferencia from '../typeorm/entities/Transferencia';
import { TransferenciaRepository } from '../typeorm/repositories/TransferenciasRepository';

interface IRequest {
  id: string;
  time_origem: string;
  time_destino: string;
  data: Date;
  valor: number;
}

class UpdateTransferenciaService {
  public async execute({
    id,
    time_origem,
    time_destino,
    data,
    valor,
  }: IRequest): Promise<Transferencia> {
    const transferenciasRepository = getCustomRepository(
      TransferenciaRepository,
    );

    const transferencia = await transferenciasRepository.findOne(id);

    if (!transferencia) {
      throw new AppError('Transferencia not found.');
    }

    const timesRepository = getCustomRepository(TimeRepository);
    const timeOrigemExists = await timesRepository.findByName(time_origem);

    if (!timeOrigemExists) {
      throw new AppError('Time Origem not found.');
    }

    time_origem = timeOrigemExists.id;

    const timeDestinoExists = await timesRepository.findByName(time_destino);

    if (!timeDestinoExists) {
      throw new AppError('Time Destino not found.');
    }

    time_destino = timeDestinoExists.id;

    transferencia.time_origem = time_origem;
    transferencia.time_destino = time_destino;
    transferencia.data = data;
    transferencia.valor = valor;

    await transferenciasRepository.save(transferencia);

    return transferencia;
  }
}

export default UpdateTransferenciaService;
