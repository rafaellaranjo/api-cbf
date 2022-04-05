import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('jogadores')
class Time {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  time_origem: string;

  @Column('uuid')
  time_destino: string;

  @Column()
  data: Date;

  @Column('decimal')
  valor: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Time;
