import { TimeRepository } from '@modules/times/typeorm/repositories/TimesRepository';
import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Jogador from '../typeorm/entities/Jogador';
import { JogadorRepository } from '../typeorm/repositories/JogadoresRepository';

interface IRequest {
  nome: string;
  data_nascimento: Date;
  pais: string;
  time: string;
}

class CreateJogadorService {
  public async execute({
    nome,
    data_nascimento,
    pais,
    time,
  }: IRequest): Promise<Jogador> {
    const jogadoresRepository = getCustomRepository(JogadorRepository);
    const timesRepository = getCustomRepository(TimeRepository);
    const timeExists = await timesRepository.findByName(time);

    if (!timeExists) {
      throw new AppError('Time not found.');
    }

    time = timeExists.id;

    const jogador = jogadoresRepository.create({
      nome,
      data_nascimento,
      pais,
      time,
    });

    await jogadoresRepository.save(jogador);

    return jogador;
  }
}

export default CreateJogadorService;
