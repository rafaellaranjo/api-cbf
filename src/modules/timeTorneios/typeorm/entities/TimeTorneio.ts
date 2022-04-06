import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('times_torneio')
class TimeTorneio {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  torneio: string;

  @Column('uuid')
  time: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default TimeTorneio;
