/**
* Types in requests.
* Use `Req` prefix.
*/

import { CmnDateRange, CmnPassword, CmnPhoneClass, CmnPriority, CmnTagElement } from "./common";

export interface ReqRegister {
    /**
     * 验证码
     */
    captcha: number;
    email: string;
    /**
     * 用户姓名
     */
    name: string;
    password: string;
    phone: CmnPhoneClass | number;
    /**
     * 学工号
     */
    school_id: string;
    tags?: CmnTagElement[];
}

export interface ReqEmail {
    email: string;
}

export interface ReqPasswordPair {
    email: string;
    password: string;
}

export interface ReqBulkUserInfo {
    ids: string[];
}

export interface ReqResetPassword {
    /**
     * 验证码
     */
    captcha: number;
    email: string;
    new_password: string;
}

export interface ReqUserInfo {
    departments?: string[] | null;
    /**
     * 姓名
     */
    name?: null | string;
    password?: null | CmnPassword;
    phone?: CmnPhoneClass | number | null;
    /**
     * 学工号
     */
    school_id?: null | string;
    /**
     * Token过期秒数，0为不过期
     */
    token_expire_duration?: number | null;
}

export interface ReqSetPerms {
    permissions: string[];
    /**
     * 目标用户id
     */
    target_account: string;
}

export interface ReqPost {
    /**
     * 是否连续
     */
    grouped: boolean;
    notes: string;
    priority: CmnPriority;
    /**
     * 资源id列表
     */
    resources: string[];
    time: CmnDateRange;
    title: string;
}

export interface ReqBulkPosts{
    posts: string;
}