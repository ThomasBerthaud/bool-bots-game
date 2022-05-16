/** @jsxImportSource @emotion/react */
import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { faPause, faPlay, faStop } from "@fortawesome/free-solid-svg-icons";
import { pauseArena, startArena, stopArena } from "../redux/ArenaSlice";
import { UIIcon } from "./components/UIIcon";
import { areBotsValid } from "../domain/arena/BotConfigurationEntity";
import { UITooltip } from "./components/UITooltip";
import { css } from "@emotion/react";

const containerStyle = css`
    display: flex;
    justify-content: center;
    gap: var(--spacing);
`;

const iconStyle = css`
    cursor: pointer;
    color: var(--text-primary);
`;
const disabledStyle = css`
    color: var(--disabled);
`;
const playStyle = css`
    &:hover {
        color: var(--play);
    }
`;
const pauseStyle = css`
    &:hover {
        color: var(--pause);
    }
`;
const stopStyle = css`
    &:hover {
        color: var(--stop);
    }
`;

export const UIControls: React.VFC = () => {
    const { running, bots } = useAppSelector((state) => state.arena);
    const dispatch = useAppDispatch();

    const isValid = areBotsValid(bots);

    const icon = !running ? (
        <UIIcon
            icon={faPlay}
            title="Battle!"
            css={isValid ? [iconStyle, playStyle] : disabledStyle}
            className={"fa-2xl"}
            onClick={() => isValid && dispatch(startArena())}
            aria-disabled={!isValid}
        />
    ) : (
        <div css={containerStyle}>
            <UIIcon
                icon={faPause}
                title="Pause"
                css={[iconStyle, pauseStyle]}
                className="fa-2xl"
                onClick={() => dispatch(pauseArena())}
            />
            <UIIcon
                icon={faStop}
                title="Stop"
                css={[iconStyle, stopStyle]}
                className="fa-2xl"
                onClick={() => dispatch(stopArena())}
            />
        </div>
    );

    return (
        <div css={containerStyle}>
            <UITooltip direction="bottom" label="Something is wrong with your bot configurations !" disabled={isValid}>
                {icon}
            </UITooltip>
        </div>
    );
};
