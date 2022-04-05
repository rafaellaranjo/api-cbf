import { Request, Response } from 'express';
import CreateJogadorService from '../services/CreateJogadorService';
import DeleteJogadorService from '../services/DeleteJogadorService';
import ListJogadorService from '../services/ListJogadorService';
import ShowJogadorService from '../services/ShowJogadorService';
import UpdateJogadorService from '../services/UpdateJogadorService';

export default class JogadorsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listJogadors = new ListJogadorService();

    const jogadors = await listJogadors.execute();

    return response.json(jogadors);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showJogador = new ShowJogadorService();

    const jogador = await showJogador.execute({ id });

    return response.json(jogador);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { nome, data_nascimento, pais, time } = request.body;

    const createJogador = new CreateJogadorService();

    const jogador = await createJogador.execute({
      nome,
      data_nascimento,
      pais,
      time,
    });

    return response.json(jogador);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { nome, data_nascimento, pais, time } = request.body;
    const { id } = request.params;

    const updateJogador = new UpdateJogadorService();

    const jogador = await updateJogador.execute({
      id,
      nome,
      data_nascimento,
      pais,
      time,
    });

    return response.json(jogador);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteJogador = new DeleteJogadorService();

    await deleteJogador.execute({ id });

    return response.json([]);
  }
}
