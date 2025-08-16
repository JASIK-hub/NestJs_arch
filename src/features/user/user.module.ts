import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/foundation/db/entities/user.entity';
import { UserService } from './services/user.services';
import { ControlUsers } from './contoller/user.controller';
import { CrudService } from 'src/foundation/services/crud.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UserService,CrudService],
  controllers:[ControlUsers],
  exports: [UserService],
})
export class UserModule {}
