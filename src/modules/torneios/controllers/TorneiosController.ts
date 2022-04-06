import { Request, Response } from 'express';
import CreateTorneioService from '../services/CreateTorneioService';
import DeleteTorneioService from '../services/DeleteTorneioService';
import ListTorneioService from '../services/ListTorneioService';
import ShowTorneioService from '../services/ShowTorneioService';
import UpdateTorneioService from '../services/UpdateTorneioService';

export default class TorneiosController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listTorneios = new ListTorneioService();

    const torneios = await listTorneios.execute();

    return response.json(torneios);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showTorneio = new ShowTorneioService();

    const torneio = await showTorneio.execute({ id });

    return response.json(torneio);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { nome, quantidade_times, premio } = request.body;

    const createTorneio = new CreateTorneioService();

    const torneio = await createTorneio.execute({
      nome,
      quantidade_times,
      premio,
    });

    return response.json(torneio);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { nome, quantidade_times, premio } = request.body;
    const { id } = request.params;

    const updateTorneio = new UpdateTorneioService();

    const torneio = await updateTorneio.execute({
      id,
      nome,
      quantidade_times,
      premio,
    });

    return response.json(torneio);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteTorneio = new DeleteTorneioService();

    await deleteTorneio.execute({ id });

    return response.json([]);
  }
}
