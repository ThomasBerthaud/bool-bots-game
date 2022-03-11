import "./App.css";
import { Leaderboard } from "./ui/Leaderboard";
import { Controls } from "./ui/Controls";
import { Configuration } from "./ui/Configuration";
import React from "react";

export const App: React.VFC = () => {
    return (
        <div className="game-controls">
            <Controls />
            <Leaderboard />
            <Configuration />
        </div>
    );
};
