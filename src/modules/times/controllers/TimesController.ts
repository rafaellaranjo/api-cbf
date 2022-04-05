import { Request, Response } from 'express';
import CreateTimeService from '../services/CreateTimeService';
import DeleteTimeService from '../services/DeleteTimeService';
import ListTimeService from '../services/ListTimeService';
import ShowTimeService from '../services/ShowTimeService';
import UpdateTimeService from '../services/UpdateTimeService';

export default class TimesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listTimes = new ListTimeService();

    const times = await listTimes.execute();

    return response.json(times);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showTime = new ShowTimeService();

    const time = await showTime.execute({ id });

    return response.json(time);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { nome, localidade } = request.body;

    const createTime = new CreateTimeService();

    const time = await createTime.execute({
      nome,
      localidade,
    });

    return response.json(time);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { nome, localidade } = request.body;
    const { id } = request.params;

    const updateTime = new UpdateTimeService();

    const time = await updateTime.execute({
      id,
      nome,
      localidade,
    });

    return response.json(time);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteTime = new DeleteTimeService();

    await deleteTime.execute({ id });

    return response.json([]);
  }
}
