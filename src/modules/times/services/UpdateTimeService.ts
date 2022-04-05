import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Time from '../typeorm/entities/Time';
import { TimeRepository } from '../typeorm/repositories/TimesRepository';

interface IRequest {
  id: string;
  nome: string;
  localidade: string;
}

class UpdateTimeService {
  public async execute({ id, nome, localidade }: IRequest): Promise<Time> {
    const timesRepository = getCustomRepository(TimeRepository);

    const time = await timesRepository.findOne(id);

    if (!time) {
      throw new AppError('Time not found.');
    }

    const timeExists = await timesRepository.findByName(nome);

    if (timeExists && nome !== time.nome) {
      throw new AppError('There is already one time with this name');
    }

    time.nome = nome;
    time.localidade = localidade;

    await timesRepository.save(time);

    return time;
  }
}

export default UpdateTimeService;
