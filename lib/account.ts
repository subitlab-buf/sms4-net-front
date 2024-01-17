import axios, { Axios, HttpStatusCode } from "axios";
import { Req } from "./types/req";
import { AccountPath } from "./consts";

function str(x: any): string {
    return JSON.stringify(x);
}

export class Account {
    /**
     * Send captcha to user before register.
     * 
     * @param email The target email.
     * @param instance Custom axios instance, not required.
     */
    static async sendCaptcha(email: string, instance: Axios = axios): Promise<boolean> {
        const body: Req.Email = {
            email: email,
        };
        const res = await instance.post(AccountPath.SEND_CAPTCHA, str(body));
        return res.status === HttpStatusCode.Ok;
    }
}