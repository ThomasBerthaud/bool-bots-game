import { Effect, ForkEffect, select, takeEvery } from "redux-saga/effects";
import { addBot, ArenaState, pauseArena, setBotConfiguration, startArena, stopArena } from "./ArenaSlice";
import { arenaRepository } from "../domain/arena/ArenaRepository";
import { RootState } from "./store";
import { areBotsValid } from "../domain/arena/BotConfigurationEntity";

const arenaSagas: ForkEffect[] = [
    takeEvery(startArena.type, function () {
        arenaRepository.start();
    }),
    takeEvery(pauseArena.type, function () {
        arenaRepository.stop();
    }),
    takeEvery(stopArena.type, function () {
        arenaRepository.reset();
    }),
    takeEvery([addBot.type, setBotConfiguration.type], function* (): Generator<Effect, void, ArenaState> {
        const state = yield select((state: RootState) => state.arena);
        if (areBotsValid(state.bots)) {
            arenaRepository.setBots(state.bots);
        }
    }),
];

export default arenaSagas;
