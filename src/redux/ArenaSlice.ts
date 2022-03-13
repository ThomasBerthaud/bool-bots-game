import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { startingBots } from "../data/startingBots";
import { BotConfigurationEntity } from "../domain/arena/bot/BotConfigurationEntity";

export interface ArenaState {
    running: boolean;
    bots: BotConfigurationEntity[];
}

const initialState: ArenaState = {
    running: false,
    bots: startingBots,
};

export const arenaSlice = createSlice({
    name: "arena",
    initialState,
    reducers: {
        startArena: (state) => {
            // TODO check for bots configuration validity
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
            const newBot: BotConfigurationEntity = {
                id: state.bots.length,
            };
            state.bots.push(newBot);
        },
        setBotConfiguration: (state, { payload }: PayloadAction<BotConfigurationEntity>) => {
            state.bots[payload.id] = { ...state.bots[payload.id], ...payload };
        },
        deleteBot: (state, { payload }: PayloadAction<number>) => {
            state.bots.splice(payload, 1);
        },
    },
});

// Action creators are generated for each case reducer function
export const { startArena, pauseArena, stopArena, addBot, setBotConfiguration, deleteBot } = arenaSlice.actions;

export default arenaSlice.reducer;
