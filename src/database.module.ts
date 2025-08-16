import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './foundation/db/entities/user.entity';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ENV_KEYS } from './foundation/config/env.keys';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>(ENV_KEYS.DB_HOST),
        port: configService.get<number>(ENV_KEYS.DB_PORT),
        username: configService.get<string>(ENV_KEYS.DB_USERNAME),
        password: configService.get<string>(ENV_KEYS.DB_PASSWORD),
        database: configService.get<string>(ENV_KEYS.DB_DATABASE),
        entities: [UserEntity],
        synchronize: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
