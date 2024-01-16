/**
 * Common types.
 * Use `Cmn` prefix.
 */

export interface CmnPhoneClass {
    number: number;
    /**
     * 区域号码
     */
    region: number;
}

/**
 * Tag
 */
export interface CmnTagElement {
    entry: CmnTagEntry;
    tag: number | string;
}

/**
 * TagEntry
 */
export enum CmnTagEntry {
    Academy = "Academy",
    Department = "Department",
    House = "House",
    Permission = "Permission",
}

export interface CmnPassword {
    new: string;
    old: string;
}

/**
 * Priority
 */
export enum CmnPriority {
    Block = "Block",
    High = "High",
    Low = "Low",
    Normal = "Normal",
}

/**
 * DateRange
 */
export interface CmnDateRange {
    end: Date;
    start: Date;
}

/**
 * Status
 */
export enum CmnStatus {
    Approved = "Approved",
    Pending = "Pending",
    Rejected = "Rejected",
}

export enum CmnPostType {
    Full = "Full",
    Simple = "Simple",
}

/**
 * State
 */
export interface CmnState {
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