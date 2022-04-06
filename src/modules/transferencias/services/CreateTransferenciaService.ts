import { JogadorRepository } from '@modules/jogadores/typeorm/repositories/JogadoresRepository';
import { TimeRepository } from '@modules/times/typeorm/repositories/TimesRepository';
import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Transferencia from '../typeorm/entities/Transferencia';
import { TransferenciaRepository } from '../typeorm/repositories/TransferenciasRepository';

interface IRequest {
  jogador: string;
  time_origem: string;
  time_destino: string;
  data: Date;
  valor: number;
}

class CreateTransferenciaService {
  public async execute({
    jogador,
    time_origem,
    time_destino,
    data,
    valor,
  }: IRequest): Promise<Transferencia> {
    const transferenciasRepository = getCustomRepository(
      TransferenciaRepository,
    );
    const jogadorRepository = getCustomRepository(JogadorRepository);
    const jogadorExists = await jogadorRepository.findByName(jogador);

    if (!jogadorExists) {
      throw new AppError('Jogador not found.');
    }

    jogador = jogadorExists.id;

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
      jogador,
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
