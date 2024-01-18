/**
 * Common types.
 * Use `Cmn` namespace.
 */

import { Util } from "../util";

export namespace Cmn {
    export type PhoneClass = {
        number: number;
        /**
         * 区域号码
         */
        region: number;
    } | number;

    /**
     * Tag
     * 
     * @todo Specify type restraints.
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
     * Priority
     */
    export enum Priority {
        Block = "Block",
        High = "High",
        Low = "Low",
        Normal = "Normal",
    }

    /**
     * DateRange
     */
    export interface DateRange {
        end: Date;
        start: Date;
    }

    /**
     * Status
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
     * State
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