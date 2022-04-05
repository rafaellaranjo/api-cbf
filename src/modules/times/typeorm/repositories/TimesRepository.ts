import { EntityRepository, Repository } from 'typeorm';
import Time from '../entities/Time';

@EntityRepository(Time)
export class TimeRepository extends Repository<Time> {
  public async findByName(nome: string): Promise<Time | undefined> {
    const time = this.findOne({
      where: {
        nome,
      },
    });

    return time;
  }

  public async findByLocate(localidade: string): Promise<Time | undefined> {
    const time = this.findOne({
      where: {
        localidade,
      },
    });

    return time;
  }
}
