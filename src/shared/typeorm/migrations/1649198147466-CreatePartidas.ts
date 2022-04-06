import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreatePartidas1649198147466 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'partidas',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'data',
            type: 'date',
          },
          {
            name: 'local',
            type: 'varchar',
          },
          {
            name: 'torneio',
            type: 'uuid',
          },
          {
            name: 'time_casa',
            type: 'uuid',
          },
          {
            name: 'gols_casa',
            type: 'int',
          },
          {
            name: 'time_visitante',
            type: 'uuid',
          },
          {
            name: 'gols_visitante',
            type: 'int',
          },
          {
            name: 'created_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'partidas',
      new TableForeignKey({
        columnNames: ['time_casa'],
        referencedColumnNames: ['id'],
        referencedTableName: 'times',
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'partidas',
      new TableForeignKey({
        columnNames: ['time_visitante'],
        referencedColumnNames: ['id'],
        referencedTableName: 'times',
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'partidas',
      new TableForeignKey({
        columnNames: ['torneio'],
        referencedColumnNames: ['id'],
        referencedTableName: 'torneios',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('partidas');
  }
}
