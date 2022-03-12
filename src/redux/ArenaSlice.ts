import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BotConfigurationModel } from "../domain/arena/bot/BotConfigurationModel";

export interface ArenaState {
    running: boolean;
    bots: BotConfigurationModel[];
}

const initialState: ArenaState = {
    running: false,
    bots: [],
};

export const arenaSlice = createSlice({
    name: "arena",
    initialState,
    reducers: {
        startArena: (state) => {
            state.running = true;
        },
        pauseArena: (state) => {
            state.running = false;
        },
        stopArena: (state) => {
            // TODO reset arena
            state.running = false;
        },
        addBot: (state) => {
            const newBot: BotConfigurationModel = {
                id: state.bots.length,
            };
            state.bots.push(newBot);
        },
        setBotConfiguration: (state, { payload }: PayloadAction<BotConfigurationModel>) => {
            state.bots[payload.id] = payload;
        },
        deleteBot: (state, { payload }: PayloadAction<number>) => {
            state.bots.splice(payload, 1);
        },
    },
});

// Action creators are generated for each case reducer function
export const { startArena, pauseArena, stopArena, addBot, setBotConfiguration, deleteBot } = arenaSlice.actions;

export default arenaSlice.reducer;
