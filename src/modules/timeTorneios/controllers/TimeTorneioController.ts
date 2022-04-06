import { Request, Response } from 'express';
import CreateTimeTorneioService from '../services/CreateTimeTorneioService';
import DeleteTimeTorneioService from '../services/DeleteTimeTorneioService';
import ListTimeTorneioService from '../services/ListTimeTorneioService';
import ShowTimeTorneioService from '../services/ShowTimeTorneioService';
import UpdateTimeTorneioService from '../services/UpdateTimeTorneioService';

export default class TimeTorneiosController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listTimeTorneios = new ListTimeTorneioService();

    const timeTorneios = await listTimeTorneios.execute();

    return response.json(timeTorneios);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showTimeTorneio = new ShowTimeTorneioService();

    const timeTorneio = await showTimeTorneio.execute({ id });

    return response.json(timeTorneio);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { time, torneio } = request.body;

    const createTimeTorneio = new CreateTimeTorneioService();

    const timeTorneio = await createTimeTorneio.execute({
      time,
      torneio,
    });

    return response.json(timeTorneio);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { time, torneio } = request.body;
    const { id } = request.params;

    const updateTimeTorneio = new UpdateTimeTorneioService();

    const timeTorneio = await updateTimeTorneio.execute({
      id,
      time,
      torneio,
    });

    return response.json(timeTorneio);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteTimeTorneio = new DeleteTimeTorneioService();

    await deleteTimeTorneio.execute({ id });

    return response.json([]);
  }
}
