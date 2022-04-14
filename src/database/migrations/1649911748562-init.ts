import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class init1649911748562 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'trailer',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'director',
            type: 'varchar',
          },
          {
            name: 'year',
            type: 'varchar',
          },
          {
            name: 'trailerUrl',
            type: 'varchar',
          },
        ],
      }),
      true,
    );

    await queryRunner.createTable(
      new Table({
        name: 'actor',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'dateOfBirth',
            type: 'date',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'trailerId',
            type: 'int',
            isNullable: true,
          },
        ],
      }),
      true,
    );

    await queryRunner.createTable(
      new Table({
        name: 'review',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'rating',
            type: 'int',
          },
          {
            name: 'trailerId',
            type: 'int',
            isNullable: true,
          },
        ],
      }),
      true,
    );

    await queryRunner.createForeignKey(
      'review',
      new TableForeignKey({
        columnNames: ['trailerId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'trailer',
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'actor',
      new TableForeignKey({
        columnNames: ['trailerId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'trailer',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumns('review', ['trailerId']);
    await queryRunner.dropColumns('actor', ['trailerId']);
    await queryRunner.dropTable('review');
    await queryRunner.dropTable('actor');
    await queryRunner.dropTable('trailer');
  }
}
