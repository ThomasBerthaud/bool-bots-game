import styles from "./App.module.css";
import { UILeaderboard } from "./ui/UILeaderboard";
import { UIControls } from "./ui/UIControls";
import { UIConfiguration } from "./ui/UIConfiguration";
import React from "react";
import { UIArena } from "./ui/UIArena";
import { arenaRepository } from "./domain/arena/ArenaRepository";

const arenaView = arenaRepository.getView();

export const App: React.VFC = () => (
    <>
        <div className={styles.gameOptions}>
            <div />
            <UIControls />
            <div className={styles.gameConfiguration}>
                <UILeaderboard />
                <UIConfiguration />
            </div>
        </div>
        <UIArena arenaView={arenaView} />
    </>
);
