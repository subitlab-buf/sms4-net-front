import axios, { Axios, HttpStatusCode } from "axios";
import { Req } from "./types/req";
import { AccountPath } from "./consts";
import { Cmn } from "./types/common";
import { Util } from "./util";

function str(x: any): string {
    return JSON.stringify(x);
}

export namespace Account {
    /**
     * Send captcha to user before register.
     * 
     * @param email The target email.
     * @param instance Custom axios instance, not required.
     */
    export async function sendCaptcha(email: string, instance: Axios = axios): Promise<boolean> {
        const body: Req.Email = {
            email: email,
        };
        const res = await instance.post(AccountPath.SEND_CAPTCHA, str(body));
        return res.status === HttpStatusCode.Ok;
    }
    export async function register(email: string, name: string, schoolId: string, password: string, phone: Cmn.PhoneClass, captcha:number ,tags: Cmn.TagElement[], instance: Axios) {

    }
}