import "./App.css";
import { UILeaderboard } from "./ui/UILeaderboard";
import { UIControls } from "./ui/UIControls";
import { UIConfiguration } from "./ui/UIConfiguration";
import React from "react";
import { UIArena } from "./ui/UIArena";
import { arenaRepository } from "./domain/arena/ArenaRepository";

const arenaView = arenaRepository.getView();

export const App: React.VFC = () => {
    return (
        <>
            <div className="game-options">
                <UIControls />
                <div className="game-configuration">
                    <UILeaderboard />
                    <UIConfiguration />
                </div>
            </div>
            <UIArena arenaView={arenaView} />
        </>
    );
};
