import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { UserRoles } from '../enum/user.roles';
import { Exclude } from 'class-transformer';

@Entity('userData')
export class UserEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @ApiProperty()
  @Column({ unique: true })
  email: string;

  @ApiProperty()
  @Exclude()
  @Column()
  password: string;

  @ApiProperty()
  @Column({ type: 'enum', enum: UserRoles, default: UserRoles.USER })
  role: UserRoles;
}
