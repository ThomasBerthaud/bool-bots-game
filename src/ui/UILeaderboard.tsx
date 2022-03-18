import React from "react";
import "./UILeaderboard.css";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { Menu } from "./components/Menu";
import { useAppSelector } from "../redux/hooks";

export const UILeaderboard: React.VFC = () => {
    const leaderboard = useAppSelector((state) => state.arena.leaderboard);

    const leaderBoardLi = leaderboard.map((bot) => (
        <li key={bot.id}>
            <span className="name">{bot.name}</span>
            <span className="win">Wins: {bot.win}</span>
            <span>Loss: {bot.loss}</span>
        </li>
    ));
    return (
        <Menu icon={faTrophy} iconTitle="Leaderboard" className="leaderboard-menu" position="left">
            <h2>LeaderBoard</h2>
            <ol>{leaderBoardLi}</ol>
        </Menu>
    );
};
