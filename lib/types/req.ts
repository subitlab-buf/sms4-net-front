/**
* Types in requests.
* Use `Req` namespace.
*/

import { Cmn } from "./common";

export namespace Req {
    export interface Register {
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
        phone: Cmn.PhoneClass | number;
        /**
         * 学工号
         */
        school_id: string;
        tags?: Cmn.TagElement[];
    }

    export interface Email {
        email: string;
    }

    export interface PasswordPair {
        email: string;
        password: string;
    }

    export interface BulkUserInfo {
        ids: string[];
    }

    export interface ResetPassword {
        /**
         * 验证码
         */
        captcha: number;
        email: string;
        new_password: string;
    }

    export interface UserInfo {
        departments?: string[] | null;
        /**
         * 姓名
         */
        name?: null | string;
        password?: null | Cmn.Password;
        phone?: Cmn.PhoneClass | number | null;
        /**
         * 学工号
         */
        school_id?: null | string;
        /**
         * Token过期秒数，0为不过期
         */
        token_expire_duration?: number | null;
    }

    export interface SetPerms {
        permissions: string[];
        /**
         * 目标用户id
         */
        target_account: string;
    }

    export interface Post {
        /**
         * 是否连续
         */
        grouped: boolean;
        notes: string;
        priority: Cmn.Priority;
        /**
         * 资源id列表
         */
        resources: string[];
        time: Cmn.DateRange;
        title: string;
    }

    export interface BulkPosts {
        posts: string;
    }

    export interface Modify {
        /**
         * 是否连续
         */
        grouped?: boolean | null;
        /**
         * 备注，附加备注
         */
        notes?: null | string;
        resources?: string[] | null;
        time?: null | Cmn.DateRange;
        title?: null | string;
    }

    export interface Review {
        /**
         * 附加信息
         */
        message?: null | string;
        status: Cmn.Status;
    }

    export type BulkRemove = {
        type: "Posts";
        posts: string;
    } | {
        type: "Unused";
    }
}