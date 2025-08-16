import { ApiProperty } from '@nestjs/swagger';

export class LoginResultDto {
  @ApiProperty({ example: 'Jasik' })
  username: string;
  @ApiProperty({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6...' })
  access_token: string;
}
