import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Time from '../typeorm/entities/Time';
import { TimeRepository } from '../typeorm/repositories/TimesRepository';

interface IRequest {
  nome: string;
  localidade: string;
}

class CreateTimeService {
  public async execute({ nome, localidade }: IRequest): Promise<Time> {
    const timesRepository = getCustomRepository(TimeRepository);
    const timeExists = await timesRepository.findByName(nome);

    if (timeExists) {
      throw new AppError('There is already one time with this name');
    }

    const time = timesRepository.create({
      nome,
      localidade,
    });

    await timesRepository.save(time);

    return time;
  }
}

export default CreateTimeService;
