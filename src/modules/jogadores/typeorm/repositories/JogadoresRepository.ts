import { TimeRepository } from '@modules/times/typeorm/repositories/TimesRepository';
import AppError from '@shared/errors/AppError';
import { EntityRepository, getCustomRepository, Repository } from 'typeorm';
import Jogador from '../entities/Jogador';

@EntityRepository(Jogador)
export class JogadorRepository extends Repository<Jogador> {
  public async findByName(nome: string): Promise<Jogador | undefined> {
    const jogador = this.findOne({
      where: {
        nome,
      },
    });

    return jogador;
  }

  public async findByCountry(pais: string): Promise<Jogador | undefined> {
    const jogador = this.findOne({
      where: {
        pais,
      },
    });

    return jogador;
  }

  public async findByTime(time: string): Promise<Jogador | undefined> {
    const timesRepository = getCustomRepository(TimeRepository);
    const timeExists = await timesRepository.findByName(time);

    if (!timeExists) {
      throw new AppError('Time not found.');
    }

    time = timeExists.id;

    const jogador = this.findOne({
      where: {
        time,
      },
    });

    return jogador;
  }
}
