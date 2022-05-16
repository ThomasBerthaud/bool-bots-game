/** @jsxImportSource @emotion/react */
import React from "react";
import { faCross, faCrosshairs, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { UIMenu } from "./components/UIMenu";
import { useAppSelector } from "../redux/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { css } from "@emotion/react";

const menuStyle = css`
    width: 40vw;
`;
const titleStyle = css`
    margin-bottom: var(--spacing);
`;
const entryStyle = css`
    .index,
    .name {
        font-size: 1.25rem;
    }
    .name {
        font-weight: bold;
        padding-right: var(--spacing);
    }

    .win,
    .loss {
        padding: 0 var(--spacing-sm);
    }
    .win {
        color: var(--win);
    }
    .loss {
        color: var(--loss);
    }
`;

export const UILeaderboard: React.VFC = () => {
    const leaderboard = useAppSelector((state) => state.arena.leaderboard);

    const leaderboardTable = leaderboard.map((bot, index) => (
        <tr key={bot.id} css={entryStyle}>
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
        <UIMenu
            icon={faTrophy}
            activeIconColor={"#ffc400"}
            iconTitle="Leaderboard"
            position="left"
            contentStyle={menuStyle}
        >
            <h2 css={titleStyle}>LeaderBoard</h2>
            <table>
                <tbody>{leaderboardTable}</tbody>
            </table>
        </UIMenu>
    );
};
