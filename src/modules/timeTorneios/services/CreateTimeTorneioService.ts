import { TimeRepository } from '@modules/times/typeorm/repositories/TimesRepository';
import { TorneioRepository } from '@modules/torneios/typeorm/repositories/TorneiosRepository';
import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import TimeTorneio from '../typeorm/entities/TimeTorneio';
import { TimeTorneioRepository } from '../typeorm/repositories/TimeTorneioRepository';

interface IRequest {
  time: string;
  torneio: string;
}

class CreateTimeTorneioService {
  public async execute({ time, torneio }: IRequest): Promise<TimeTorneio> {
    const timeTorneiosRepository = getCustomRepository(TimeTorneioRepository);
    const timeTorneioExists = await timeTorneiosRepository.findByTimeTorneio(
      time,
      torneio,
    );

    if (timeTorneioExists) {
      throw new AppError('There is already one time with this time');
    }

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

    const timeTorneio = timeTorneiosRepository.create({
      time,
      torneio,
    });

    await timeTorneiosRepository.save(timeTorneio);

    return timeTorneio;
  }
}

export default CreateTimeTorneioService;
