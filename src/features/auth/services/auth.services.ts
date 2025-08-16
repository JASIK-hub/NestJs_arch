import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/features/user/services/user.services';
import * as bcrypt from 'bcryptjs';
import { RegisterDto } from 'src/foundation/dto/register.dto';
import { LoginDto } from 'src/foundation/dto/login.dto';
import { ConfigService } from '@nestjs/config';
import { ENV_KEYS } from 'src/foundation/config/env.keys';

@Injectable()
export class AuthService {
  constructor(
    private users: UserService,
    private jwt: JwtService,
    private configService: ConfigService,
  ) {}

  async signup(registerDto: RegisterDto) {
    if (await this.users.findByEmail(registerDto.email)) {
      throw new BadRequestException('User already exists');
    }

    const hashed = await this.hashPassword(registerDto.password);
    const user = await this.users.create({ ...registerDto, password: hashed });
    return { id: user.id, email: user.email };
  }

  async login(loginDto: LoginDto) {
    const user = await this.users.findByEmail(loginDto.email);
    if (!user) throw new UnauthorizedException('Incorrect login or password');

    const valid = await bcrypt.compare(loginDto.password, user.password);
    if (!valid) throw new UnauthorizedException('Incorrect login or password');

    const token = this.jwt.sign({ sub: user.id, email: user.email });
    return { username: user.username, access_token: token };
  }

  async hashPassword(password: string) {
    return await bcrypt.hash(
      password,
      Number(this.configService.get(ENV_KEYS.PASSWORD_HASH)),
    );
  }
}
