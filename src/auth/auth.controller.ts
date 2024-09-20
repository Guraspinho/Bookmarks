import { Controller, Post, Req, Res } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Request, Response } from "express";




@Controller()
export class AuthController 
{
    constructor(private authService: AuthService)
    {}

    @Post("signup")
    signup(@Req() req: Request, @Res() res: Response)
    {
        console.log(req.body);
        res.json({msg: 'Signup was successfull'})
        return this.authService.signup();
    }

    @Post("login")
    login()
    {
        return this.authService.login();
    }
}