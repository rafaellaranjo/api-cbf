import { EntityRepository, Repository } from 'typeorm';
import Torneio from '../entities/Torneio';

@EntityRepository(Torneio)
export class TorneioRepository extends Repository<Torneio> {
  public async findByName(nome: string): Promise<Torneio | undefined> {
    const time = this.findOne({
      where: {
        nome,
      },
    });

    return time;
  }
}
