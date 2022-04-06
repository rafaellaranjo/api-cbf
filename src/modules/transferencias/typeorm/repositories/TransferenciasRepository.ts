import { JogadorRepository } from '@modules/jogadores/typeorm/repositories/JogadoresRepository';
import { TimeRepository } from '@modules/times/typeorm/repositories/TimesRepository';
import AppError from '@shared/errors/AppError';
import { EntityRepository, getCustomRepository, Repository } from 'typeorm';
import Transferencia from '../entities/Transferencia';

@EntityRepository(Transferencia)
export class TransferenciaRepository extends Repository<Transferencia> {
  public async findByDate(data: Date): Promise<Transferencia | undefined> {
    const transferencia = this.findOne({
      where: {
        data,
      },
    });

    return transferencia;
  }

  public async findByValue(valor: number): Promise<Transferencia | undefined> {
    const transferencia = this.findOne({
      where: {
        valor,
      },
    });

    return transferencia;
  }

  public async findByTimeOrigem(
    time_origem: string,
  ): Promise<Transferencia | undefined> {
    const timesRepository = getCustomRepository(TimeRepository);
    const timeExists = await timesRepository.findByName(time_origem);

    if (!timeExists) {
      throw new AppError('Time Origem not found.');
    }

    time_origem = timeExists.id;

    const transferencia = this.findOne({
      where: {
        time_origem,
      },
    });

    return transferencia;
  }

  public async findByTimeDestino(
    time_destino: string,
  ): Promise<Transferencia | undefined> {
    const timesRepository = getCustomRepository(TimeRepository);
    const timeExists = await timesRepository.findByName(time_destino);

    if (!timeExists) {
      throw new AppError('Time Destino not found.');
    }

    time_destino = timeExists.id;

    const transferencia = this.findOne({
      where: {
        time_destino,
      },
    });

    return transferencia;
  }

  public async findByTimeJogador(
    jogador: string,
  ): Promise<Transferencia | undefined> {
    const jogadorRepository = getCustomRepository(JogadorRepository);
    const jogadorExists = await jogadorRepository.findByName(jogador);

    if (!jogadorExists) {
      throw new AppError('Jogador not found.');
    }

    jogador = jogadorExists.id;

    const transferencia = this.findOne({
      where: {
        jogador,
      },
    });

    return transferencia;
  }
}
