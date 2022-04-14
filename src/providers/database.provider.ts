import { TypeOrmModule } from '@nestjs/typeorm';

export const DatabaseProvider = [
  TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db',
    autoLoadEntities: true,
    entities: ['dist/src/common/Entities/*.entity{.ts,.js}'],
    synchronize: false,
    migrations: ['dist/src/database/migrations/*{.ts,.js}'],
  }),
];
