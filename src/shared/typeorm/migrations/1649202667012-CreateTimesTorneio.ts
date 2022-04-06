import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateTimesTorneio1649202667012 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'times_torneio',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'torneio',
            type: 'uuid',
          },
          {
            name: 'time',
            type: 'uuid',
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
      'times_torneio',
      new TableForeignKey({
        columnNames: ['time'],
        referencedColumnNames: ['id'],
        referencedTableName: 'times',
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'times_torneio',
      new TableForeignKey({
        columnNames: ['torneio'],
        referencedColumnNames: ['id'],
        referencedTableName: 'torneios',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('times_torneio');
  }
}
