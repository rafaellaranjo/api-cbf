import { TimeRepository } from '@modules/times/typeorm/repositories/TimesRepository';
import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Transferencia from '../typeorm/entities/Transferencia';
import { TransferenciaRepository } from '../typeorm/repositories/TransferenciasRepository';

interface IRequest {
  time_origem: string;
  time_destino: string;
  data: Date;
  valor: number;
}

class CreateTransferenciaService {
  public async execute({
    time_origem,
    time_destino,
    data,
    valor,
  }: IRequest): Promise<Transferencia> {
    const transferenciasRepository = getCustomRepository(
      TransferenciaRepository,
    );
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

    const transferencia = transferenciasRepository.create({
      time_origem,
      time_destino,
      data,
      valor,
    });

    await transferenciasRepository.save(transferencia);

    return transferencia;
  }
}

export default CreateTransferenciaService;
