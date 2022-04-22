import React from "react";
import styles from "./UILeaderboard.module.css";
import { faCross, faCrosshairs, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { UIMenu } from "./components/UIMenu";
import { useAppSelector } from "../redux/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const UILeaderboard: React.VFC = () => {
    const leaderboard = useAppSelector((state) => state.arena.leaderboard);

    const leaderboardTable = leaderboard.map((bot, index) => (
        <tr key={bot.id}>
            <td className={styles.index}>{index + 1}.</td>
            <td className={styles.name}>{bot.name ?? "-"}</td>
            <td className={styles.win}>
                <FontAwesomeIcon icon={faCrosshairs} /> {bot.win}
            </td>
            <td className={styles.loss}>
                <FontAwesomeIcon icon={faCross} /> {bot.loss}
            </td>
        </tr>
    ));
    return (
        <UIMenu icon={faTrophy} iconTitle="Leaderboard" position="left" contentStyle={{ width: "40vw" }}>
            <h2 className={styles.title}>LeaderBoard</h2>
            <table>
                <tbody>{leaderboardTable}</tbody>
            </table>
        </UIMenu>
    );
};
