import { Request, Response } from 'express';
import CreateTransferenciaService from '../services/CreateTransferenciaService';
import DeleteTransferenciaService from '../services/DeleteTransferenciaService';
import ListTransferenciaService from '../services/ListTransferenciaService';
import ShowTransferenciaService from '../services/ShowTransferenciaService';
import UpdateTransferenciaService from '../services/UpdateTransferenciaService';

export default class TransferenciasController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listTransferencias = new ListTransferenciaService();

    const transferencias = await listTransferencias.execute();

    return response.json(transferencias);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showTransferencia = new ShowTransferenciaService();

    const transferencia = await showTransferencia.execute({ id });

    return response.json(transferencia);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { jogador, time_origem, time_destino, data, valor } = request.body;

    const createTransferencia = new CreateTransferenciaService();

    const transferencia = await createTransferencia.execute({
      jogador,
      time_origem,
      time_destino,
      data,
      valor,
    });

    return response.json(transferencia);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { jogador, time_origem, time_destino, data, valor } = request.body;
    const { id } = request.params;

    const updateTransferencia = new UpdateTransferenciaService();

    const transferencia = await updateTransferencia.execute({
      id,
      jogador,
      time_origem,
      time_destino,
      data,
      valor,
    });

    return response.json(transferencia);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteTransferencia = new DeleteTransferenciaService();

    await deleteTransferencia.execute({ id });

    return response.json([]);
  }
}
