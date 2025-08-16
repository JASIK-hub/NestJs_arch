import { ApiProperty } from "@nestjs/swagger";

export class userUpdateDto{
    @ApiProperty({ example: 'JasikChanged@example.com', description: 'Email' })
    email?:string
    @ApiProperty({ example: 'Zhasulan', description:'Username' })
    username?:string
    @ApiProperty({ example: 'ChangedPassword', description: 'PassWord' })
    password?:string
}