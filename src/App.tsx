/** @jsxImportSource @emotion/react */
import { UILeaderboard } from "./ui/UILeaderboard";
import { UIControls } from "./ui/UIControls";
import { UIConfiguration } from "./ui/UIConfiguration";
import React from "react";
import { UIArena } from "./ui/UIArena";
import { arenaRepository } from "./domain/arena/ArenaRepository";
import { css } from "@emotion/react";

const gameOptionStyle = css`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    margin: var(--spacing);
    display: grid;
    grid-gap: var(--spacing);
    grid-template-columns: 1fr 2fr 1fr;
`;

const gameConfigurationStyle = css`
    display: flex;
    justify-content: center;
    gap: var(--spacing);
    justify-self: flex-end;
`;

const arenaView = arenaRepository.getView();

export const App: React.VFC = () => {
    return (
        <>
            <div css={gameOptionStyle}>
                <div />
                <UIControls />
                <div css={gameConfigurationStyle}>
                    <UILeaderboard />
                    <UIConfiguration />
                </div>
            </div>
            <UIArena arenaView={arenaView} />
        </>
    );
};
