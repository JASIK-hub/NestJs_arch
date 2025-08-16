import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { ENV_KEYS } from 'src/foundation/config/env.keys';
import { AuthService } from './services/auth.services';
import { UserModule } from '../user/user.module';
import { JwtStrategy } from './strategies/jwt.strategie';
import { AuthController } from './contollers/auth.controller';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get(ENV_KEYS.JWT_SECRET),
      }),
    }),
    UserModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
