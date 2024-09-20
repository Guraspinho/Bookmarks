import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";




@Injectable()
export class AuthService
{
    constructor(private prisma: PrismaService) {}
    login()
    {   
        console.log("Signin was suecessful");
        return {msg: "Signup was successful"};
    }


    signup()
    {
        console.log("Signup was suecessful");
        return {msg: "Signup was successful"};
    }
}