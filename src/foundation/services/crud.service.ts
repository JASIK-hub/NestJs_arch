import { Injectable,NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { UserEntity } from "../db/entities/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { RegisterDto } from "../dto/register.dto";
import { userUpdateDto } from "src/features/user/dto/userUpdate.dto";


@Injectable()
export class CrudService{
    constructor(
        @InjectRepository(UserEntity)
        private repository:Repository<UserEntity>
        
    ){}
    async findUser(id:number):Promise<UserEntity>{
        const user=await this.repository.findOneBy({id})
        if(!user) throw new NotFoundException('User not found')
        return user
    }
    async findAllUsers():Promise<UserEntity[]>{
        const users=await this.repository.find()
        if (users.length === 0) {
            throw new NotFoundException('No users found');
        }
        return users
    }
    async createUser(data:RegisterDto): Promise<UserEntity> {
        const userExists=await this.repository.findOne({
            where:[{email:data.email},{username:data.username}]
        })
        if(userExists) throw new Error('user already exists')
        const user=this.repository.create(data)
        return await this.repository.save(user)
    }
    async updateUser(id: number,data:userUpdateDto):Promise<UserEntity>{
        const user=await this.repository.findOneBy({id})
        if (!user) throw new NotFoundException('User not found')
        Object.assign(user,data)
        return this.repository.save(user)
    }
    async deleteUser(id:number){
        const user=await this.repository.findOneBy({id})
         if (!user) throw new NotFoundException('User not found')
        await this.repository.delete(id)
    }
}