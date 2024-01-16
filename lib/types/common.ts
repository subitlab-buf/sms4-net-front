// Common types

export interface PhoneClass {
    number: number;
    /**
     * 区域号码
     */
    region: number;
}

/**
 * Tag
 */
export interface TagElement {
    entry: TagEntry;
    tag: number | string;
}

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

export enum Type {
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