import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @ApiProperty({
    example: 'Jasulan Asan',
    description: 'username of the user',
  })
  @IsString({ message: 'Username should be a string' })
  @MinLength(3, { message: 'Username should be at least 3 letters' })
  username: string;

  @ApiProperty({
    example: 'jasik@example.com',
    description: 'User email',
  })
  @IsEmail({}, { message: 'Invalid email format' })
  email: string;

  @ApiProperty({
    example: 'Password123',
    description: 'User password',
  })
  @IsString({ message: 'Password should be string' })
  @MinLength(5, { message: 'Password should be at least 5 letters' })
  password: string;
}
