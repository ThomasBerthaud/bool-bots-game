import { ArenaState } from "./ArenaSlice";
import { Draft } from "@reduxjs/toolkit";

export const updateCollectionValue = <K extends keyof Omit<ArenaState, "running">>(
    state: Draft<ArenaState>,
    collection: K,
    index: number,
    value: Partial<ArenaState[K][0]>
) => {
    state[collection][index] = { ...state[collection][index], ...value };
};
