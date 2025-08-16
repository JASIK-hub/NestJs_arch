import { Body, Controller, Post } from '@nestjs/common';
import { RegisterDto } from 'src/foundation/dto/register.dto';
import { LoginDto } from 'src/foundation/dto/login.dto';
import { AuthService } from '../services/auth.services';
import { ApiTags, ApiBody, ApiResponse } from '@nestjs/swagger';
import { UserEntity } from 'src/foundation/db/entities/user.entity';
import { LoginResultDto } from 'src/foundation/dto/login_result.dto';

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiBody({ type: RegisterDto })
  @ApiResponse({ type: UserEntity })
  @Post('signup')
  async signup(@Body() dto: RegisterDto) {
    return await this.authService.signup(dto);
  }

  @ApiBody({ type: LoginDto })
  @ApiResponse({ type: LoginResultDto })
  @Post('login')
  async login(@Body() dto: LoginDto) {
    return await this.authService.login(dto);
  }
}
