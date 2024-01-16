import axios, { Axios } from "axios";
import { ReqEmail, ReqRegister } from "./types/req";
import { AccountPath } from "./consts";

function str(x:any):string{
    return JSON.stringify(x);
}

export class Account{
    static async sendCaptcha(email:string, instance:Axios=axios) {
        const body:ReqEmail={
            email:email,
        };
        instance.post(AccountPath.SEND_CAPTCHA,str(body));
    }
}