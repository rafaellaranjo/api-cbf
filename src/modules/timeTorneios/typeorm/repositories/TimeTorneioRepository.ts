import { TimeRepository } from '@modules/times/typeorm/repositories/TimesRepository';
import { TorneioRepository } from '@modules/torneios/typeorm/repositories/TorneiosRepository';
import AppError from '@shared/errors/AppError';
import { EntityRepository, getCustomRepository, Repository } from 'typeorm';
import TimeTorneio from '../entities/TimeTorneio';

@EntityRepository(TimeTorneio)
export class TimeTorneioRepository extends Repository<TimeTorneio> {
  public async findByTorneio(
    torneio: string,
  ): Promise<TimeTorneio | undefined> {
    const torneiosRepository = getCustomRepository(TorneioRepository);
    const torneioExists = await torneiosRepository.findByName(torneio);

    if (!torneioExists) {
      throw new AppError('Torneio not found.');
    }

    torneio = torneioExists.id;

    const timeTorneio = this.findOne({
      where: {
        torneio,
      },
    });

    return timeTorneio;
  }

  public async findByTime(time: string): Promise<TimeTorneio | undefined> {
    const timesRepository = getCustomRepository(TimeRepository);
    const timeExists = await timesRepository.findByName(time);

    if (!timeExists) {
      throw new AppError('Time not found.');
    }

    time = timeExists.id;

    const timeTorneio = this.findOne({
      where: {
        time,
      },
    });

    return timeTorneio;
  }

  public async findByTimeTorneio(
    time: string,
    torneio: string,
  ): Promise<TimeTorneio | undefined> {
    const timesRepository = getCustomRepository(TimeRepository);
    const timeExists = await timesRepository.findByName(time);

    if (!timeExists) {
      throw new AppError('Time not found.');
    }

    time = timeExists.id;

    const torneiosRepository = getCustomRepository(TorneioRepository);
    const torneioExists = await torneiosRepository.findByName(torneio);

    if (!torneioExists) {
      throw new AppError('Torneio not found.');
    }

    torneio = torneioExists.id;

    const timeTorneio = this.findOne({
      where: {
        time,
        torneio,
      },
    });

    return timeTorneio;
  }
}
