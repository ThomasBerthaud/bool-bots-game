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
        const arena = yield select((state: RootState) => state.arena);
        if (areBotsValid(arena.bots)) {
            arenaRepository.setBots(arena.bots);
        }
    }),
];

export default arenaSagas;
