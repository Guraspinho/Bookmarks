import { Injectable } from "@nestjs/common";




@Injectable({})
export class AuthService
{
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