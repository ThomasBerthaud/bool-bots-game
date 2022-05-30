import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { startingBots } from "../data/startingBots";
import { BotConfigurationEntity } from "../domain/arena/BotConfigurationEntity";
import { initBotScore, LeaderboardEntity, sortByWin } from "../domain/arena/LeaderboardEntity";
import { updateCollectionValue } from "./utils";

export interface ArenaState {
    running: boolean;
    elapsedTime: number;
    bots: BotConfigurationEntity[];
    leaderboard: LeaderboardEntity[];
}

const initialState: ArenaState = {
    running: false,
    elapsedTime: 0,
    bots: startingBots,
    leaderboard: startingBots.map(initBotScore),
};

let botIdentifier = startingBots.length;
export const nextIdentifier = () => {
    return botIdentifier++;
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
            state.running = false;
        },
        setElapsedTime: (state, { payload }: PayloadAction<number>) => {
            state.elapsedTime = payload;
        },
        addBot: (state) => {
            const newBot: BotConfigurationEntity = {
                id: nextIdentifier(),
                name: "",
                speed: 1,
                booleanValue: false,
            };
            state.bots.push(newBot);
            state.leaderboard.push(initBotScore(newBot));
        },
        setBotConfiguration: (state, { payload }: PayloadAction<BotConfigurationEntity>) => {
            const botIndex = state.bots.findIndex((bot) => bot.id === payload.id);
            updateCollectionValue(state, "bots", botIndex, payload);

            const leaderboardIndex = state.leaderboard.findIndex((bot) => payload.id === bot.id);
            if (leaderboardIndex !== -1) {
                updateCollectionValue(state, "leaderboard", leaderboardIndex, { name: payload.name });
            } else {
                state.leaderboard.push(initBotScore(payload));
            }
            state.leaderboard.sort(sortByWin);
        },
        deleteBot: (state, { payload }: PayloadAction<number>) => {
            const botIndex = state.bots.findIndex((bot) => bot.id === payload);
            const leaderboardIndex = state.leaderboard.findIndex((bot) => payload === bot.id);
            state.bots.splice(botIndex, 1);
            state.leaderboard.splice(leaderboardIndex, 1);
        },
    },
});

// Action creators are generated for each case reducer function
export const { startArena, pauseArena, stopArena, addBot, setBotConfiguration, deleteBot } = arenaSlice.actions;

export default arenaSlice.reducer;
