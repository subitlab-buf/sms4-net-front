export namespace Util {
    /**
     * Generates `0|1|...|N-2|N-1` type.\
     * `N` needs to be small enough (approx. 1k).
     */
    export type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N ? Acc[number] : Enumerate<N, [...Acc, Acc['length']]>;
    
    /**
     * Generates `F|F+1|...|T-2|T-1` type.\
     * `F` and `T` needs to be small enough (approx. 1k).
     */
    export type Range<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>;
}