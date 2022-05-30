/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect } from "react";

const containerStyle = css`
    margin-top: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

type UIArenaProps = {
    arenaView: HTMLCanvasElement;
};

export const UIArena: React.VFC<UIArenaProps> = ({ arenaView }) => {
    useEffect(() => {
        document.getElementById("arena")?.replaceChildren(arenaView);
    }, [arenaView]);

    return <div id="arena" css={containerStyle} />;
};
