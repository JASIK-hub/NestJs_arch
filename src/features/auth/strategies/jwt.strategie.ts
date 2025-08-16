import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { ENV_KEYS } from 'src/foundation/config/env.keys';
import { JwtPayload } from 'src/foundation/interfaces/jwtpayload';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>(ENV_KEYS.JWT_SECRET),
    });
  }
  validate(payload: JwtPayload) {
    return { userId: payload.sub, email: payload.email };
  }
}
