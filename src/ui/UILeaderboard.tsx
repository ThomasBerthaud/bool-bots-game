import React from "react";
import "./UILeaderboard.css";
import { faCross, faCrosshairs, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { Menu } from "./components/Menu";
import { useAppSelector } from "../redux/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const UILeaderboard: React.VFC = () => {
    const leaderboard = useAppSelector((state) => state.arena.leaderboard);

    const leaderboardTable = leaderboard.map((bot, index) => (
        <tr key={bot.id}>
            <td className="index">{index + 1}.</td>
            <td className="name">{bot.name ?? "-"}</td>
            <td className="win">
                <FontAwesomeIcon icon={faCrosshairs} /> {bot.win}
            </td>
            <td className="loss">
                <FontAwesomeIcon icon={faCross} /> {bot.loss}
            </td>
        </tr>
    ));
    return (
        <Menu
            icon={faTrophy}
            iconTitle="Leaderboard"
            className="leaderboard-menu"
            position="left"
            contentStyle={{ width: "40vw" }}
        >
            <h2>LeaderBoard</h2>
            <table>
                <tbody>{leaderboardTable}</tbody>
            </table>
        </Menu>
    );
};
