import "./App.css";
import { UILeaderboard } from "./ui/UILeaderboard";
import { UIControls } from "./ui/UIControls";
import { UIConfiguration } from "./ui/UIConfiguration";
import React from "react";
import { UIArena } from "./ui/UIArena";
import { arenaRepository } from "./domain/arena/ArenaRepository";
import { DesignSystem } from "./ui/dev/DesignSystem";

const arenaView = arenaRepository.getView();
const designSystem = import.meta.env.DEV ? <DesignSystem /> : <div />;

export const App: React.VFC = () => {
    return (
        <>
            <div className="game-options">
                {designSystem}
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
