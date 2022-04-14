import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export = {
  type: 'sqlite',
  database: 'db',
  autoLoadEntities: true,
  entities: ['dist/src/common/entities/*.entity{.ts,.js}'],
  synchronize: true,
  migrations: ['dist/src/database/migrations/*{.ts,.js}'],
} as unknown as TypeOrmModuleOptions;
