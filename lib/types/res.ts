// Types in responses.

import { DateRange, PhoneClass, Priority, State, Status, TagElement, Type } from "./common";

export interface Login {
    /**
     * 过期时间，timestamp
     */
    expire_at: number | null;
    /**
     * 用户id
     */
    id: string;
    token: string;
}

/**
 * AccountInfo
 */
export interface Account {
    departments?: string[];
    email: string;
    /**
     * 用户姓名
     */
    name: string;
    phone?: PhoneClass | number;
    /**
     * 学工号
     */
    school_id?: string;
    tags?: TagElement[];
    /**
     * Token过期秒数
     */
    token_expire_duration?: number | null;
    type: "Full" | "Owned" | "Simple";
}

export type BulkAccount = Map<string, Account>;

export interface PostId {
    id: string;
}

export interface PostIds {
    posts: string[];
}

/**
 * PostInfo
 */
export interface Response {
    creator?: string;
    grouped: boolean;
    priority: Priority;
    resources: string[];
    states?: State[];
    time?: DateRange;
    title: string;
    type: Type;
}

/**
 * State
 */
export interface Post {
    message: string;
    /**
     * 操作人
     */
    operator: string;
    status: Status;
    /**
     * timestamp
     */
    time: number;
}