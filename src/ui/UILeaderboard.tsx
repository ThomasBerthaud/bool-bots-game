import React from "react";
import "./UILeaderboard.css";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { Menu } from "./components/Menu";

export const UILeaderboard: React.VFC = () => {
    return (
        <Menu icon={faTrophy} iconTitle="Leaderboard" className="leaderboard-menu" position="right">
            <h2>LeaderBoard</h2>
            <ol>
                <li>Gaston</li>
                <li>Balthazar</li>
                <li>Rémi</li>
            </ol>
        </Menu>
    );
};
