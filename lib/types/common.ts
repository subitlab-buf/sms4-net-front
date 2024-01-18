/**
 * Common types.
 * Use `Cmn` namespace.
 */

import { Util } from "../util";

export namespace Cmn {
    /**
     * A phone number.\
     * Assume `+86` if no region provided.
     */
    export type PhoneClass = {
        number: number;
        /**
         * 区域号码
         */
        region: number;
    } | number;

    /**
     * A user tag.
     */
    export type TagElement = {
        entry: TagEntry.Academy;
        /**
         * Represents 6 Academies.
         */
        tag: Util.Range<1, 7>;
    } | {
        entry: TagEntry.Department;
        tag: string;
    } | {
        entry: TagEntry.House;
        /**
         * Represents house 1-9.
         */
        tag: Util.Range<1, 10>;
    } | {
        entry: TagEntry.Permission;
        tag: Permission;
    };

    /**
     * TagEntry
     */
    export enum TagEntry {
        Academy = "Academy",
        Department = "Department",
        House = "House",
        Permission = "Permission",
    }

    export interface Password {
        new: string;
        old: string;
    }

    /**
     * Priority of a post.\
     * Affects the frequency on the screen.
     */
    export enum Priority {
        Block = "Block",
        High = "High",
        Low = "Low",
        Normal = "Normal",
    }

    /**
     * Date range to show.
     */
    export interface DateRange {
        end: Date;
        start: Date;
    }

    /**
     * Review status.
     */
    export enum Status {
        Approved = "Approved",
        Pending = "Pending",
        Rejected = "Rejected",
    }

    export enum PostType {
        Full = "Full",
        Simple = "Simple",
    }

    /**
     * Review status info struct.
     */
    export interface State {
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

    /**
     * User permission group.
     */
    export enum Permission {
        Post = "Post",
        GetPubPost = "GetPubPost",
        ReviewPost = "ReviewPost",
        RemovePost = "RemovePost",
        SetPermission = "SetPermission",
        ViewFullAccount = "ViewFullAccount",
        ViewSimpleAccount = "ViewSimpleAccount",
        ManageNotifications = "ManageNotification",
        GetPubNotifications = "GetPubNotification",
        UploadResource = "UploadResource",
        Maintain = "Maintain",
    }
}