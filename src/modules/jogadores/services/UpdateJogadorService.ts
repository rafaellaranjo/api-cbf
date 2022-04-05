import { TimeRepository } from '@modules/times/typeorm/repositories/TimesRepository';
import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Jogador from '../typeorm/entities/Jogador';
import { JogadorRepository } from '../typeorm/repositories/JogadoresRepository';

interface IRequest {
  id: string;
  nome: string;
  data_nascimento: Date;
  pais: string;
  time: string;
}

class UpdateJogadorService {
  public async execute({
    id,
    nome,
    data_nascimento,
    pais,
    time,
  }: IRequest): Promise<Jogador> {
    const jogadorsRepository = getCustomRepository(JogadorRepository);

    const jogador = await jogadorsRepository.findOne(id);

    if (!jogador) {
      throw new AppError('Jogador not found.');
    }

    const jogadorExists = await jogadorsRepository.findByName(nome);

    if (jogadorExists && nome !== jogador.nome) {
      throw new AppError('There is already one jogador with this name');
    }

    const timesRepository = getCustomRepository(TimeRepository);
    const timeExists = await timesRepository.findByName(time);

    if (!timeExists) {
      throw new AppError('Time not found.');
    }

    time = timeExists.id;

    jogador.nome = nome;
    jogador.data_nascimento = data_nascimento;
    jogador.pais = pais;
    jogador.time = time;

    await jogadorsRepository.save(jogador);

    return jogador;
  }
}

export default UpdateJogadorService;
