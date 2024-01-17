/**
* Types in responses.
* Use `Res` prefix.
*/

import { CmnDateRange, CmnPhoneClass, CmnPriority, CmnState, CmnStatus, CmnTagElement, CmnPostType } from "./common";

export namespace Res {
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
        phone?: CmnPhoneClass | number;
        /**
         * 学工号
         */
        school_id?: string;
        tags?: CmnTagElement[];
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
    export interface Post {
        creator?: string;
        grouped: boolean;
        priority: CmnPriority;
        resources: string[];
        states?: CmnState[];
        time?: CmnDateRange;
        title: string;
        type: CmnPostType;
    }

    /**
     * State
     */
    export interface PostState {
        message: string;
        /**
         * 操作人
         */
        operator: string;
        status: CmnStatus;
        /**
         * timestamp
         */
        time: number;
    }

    export type BulkPosts = Map<string, Post>;
}