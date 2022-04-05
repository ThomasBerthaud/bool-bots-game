import React from "react";
import "./UIControls.css";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { faPause, faPlay, faStop } from "@fortawesome/free-solid-svg-icons";
import { pauseArena, startArena, stopArena } from "../redux/ArenaSlice";
import { UIIcon } from "./components/UIIcon";
import { areBotsValid } from "../domain/arena/BotConfigurationEntity";
import { UITooltip } from "./components/UITooltip";

export const UIControls: React.VFC = () => {
    const { running, bots } = useAppSelector((state) => state.arena);
    const dispatch = useAppDispatch();

    const isValid = areBotsValid(bots);
    const playIconClass = isValid ? "controls-icon" : "disabled";

    const icon = !running ? (
        <UIIcon
            icon={faPlay}
            title="Battle!"
            className={playIconClass + " play fa-2xl"}
            onClick={() => isValid && dispatch(startArena())}
            aria-disabled={!isValid}
        />
    ) : (
        <>
            <UIIcon
                icon={faPause}
                title="Pause"
                className="controls-icon pause fa-2xl"
                onClick={() => dispatch(pauseArena())}
            />
            <UIIcon
                icon={faStop}
                title="Stop"
                className="controls-icon stop fa-2xl"
                onClick={() => dispatch(stopArena())}
            />
        </>
    );

    return (
        <div className="controls-container">
            <UITooltip direction="bottom" label="Something is wrong with your bot configurations !" disabled={isValid}>
                {icon}
            </UITooltip>
        </div>
    );
};
