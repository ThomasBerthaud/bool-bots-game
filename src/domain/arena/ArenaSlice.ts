import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BotConfigurationModel } from "./bot/BotConfigurationModel";

export interface ArenaState {
    value: number;
    bots: BotConfigurationModel[];
}

const initialState: ArenaState = {
    value: 0,
    bots: [],
};

export const arenaSlice = createSlice({
    name: "arena",
    initialState,
    reducers: {
        addBot: (state) => {
            const newBot: BotConfigurationModel = {
                id: state.bots.length,
            };
            state.bots.push(newBot);
        },
        setBotConfiguration: (state, { payload }: PayloadAction<BotConfigurationModel>) => {
            state.bots[payload.id] = payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { addBot, setBotConfiguration } = arenaSlice.actions;

export default arenaSlice.reducer;
