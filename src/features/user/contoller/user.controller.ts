import { Controller, Post,Get,Delete,Body,Param, Patch, ParseIntPipe } from "@nestjs/common";
import { ApiBody,ApiResponse,ApiTags,ApiParam} from "@nestjs/swagger";
import { UserEntity } from "src/foundation/db/entities/user.entity";
import { RegisterDto } from "src/foundation/dto/register.dto";
import { CrudService } from "src/foundation/services/crud.service";
import { userUpdateDto } from "../dto/userUpdate.dto";



@ApiTags('CRUD')
@Controller('user')
export class ControlUsers{
    constructor(private crudService:CrudService){}

    @Post()
    @ApiBody({type:RegisterDto})
    @ApiResponse({type:UserEntity})
    @ApiResponse({ 
        status: 400, 
        description: 'User with this email or username already exists' 
    })
    async createUser(@Body() data:RegisterDto){
        return this.crudService.createUser(data)
    }

    @Delete(':id')
    @ApiParam({ name: 'id', type: Number, description: 'User ID' })
    @ApiResponse({status:201, description: 'User deleted successfully' })
    @ApiResponse({status:404,description: 'User not found' })
    async deleteUser(@Param('id',ParseIntPipe) id:number){
        return this.crudService.deleteUser(id)
    }


    @Get(':id')
    @ApiParam({ name: 'id', type: Number, description: 'User ID' })
    @ApiResponse({status:201,type:UserEntity})
    @ApiResponse({status:404,description: 'User not found' })
    async findUser(@Param('id',ParseIntPipe) id:number){
        return this.crudService.findUser(id)
    }


    @Get()
    @ApiResponse({status:201, type: UserEntity, isArray: true })
    @ApiResponse({status:404,description: 'User not found' })
    async findAllUsers(){
        return this.crudService.findAllUsers()
    }
    
    @Patch(':id')
    @ApiParam({name: 'id', type: Number, description: 'User ID' })
    @ApiBody({type:userUpdateDto})
    async updateUser(@Param('id',ParseIntPipe) id:number,@Body() data:userUpdateDto){
        return this.crudService.updateUser(id,data)
    }
}