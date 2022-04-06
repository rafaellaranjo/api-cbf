import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateEventos1649198157067 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'eventos',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'partida',
            type: 'uuid',
          },
          {
            name: 'time',
            type: 'uuid',
          },
          {
            name: 'jogador',
            type: 'uuid',
          },
          {
            name: 'evento',
            type: 'varchar',
          },
          {
            name: 'descricao',
            type: 'varchar',
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
      'eventos',
      new TableForeignKey({
        columnNames: ['time'],
        referencedColumnNames: ['id'],
        referencedTableName: 'times',
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'transferencias',
      new TableForeignKey({
        columnNames: ['jogador'],
        referencedColumnNames: ['id'],
        referencedTableName: 'jogadores',
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'eventos',
      new TableForeignKey({
        columnNames: ['partida'],
        referencedColumnNames: ['id'],
        referencedTableName: 'partidas',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('eventos');
  }
}
