import React from "react";
import "./UIControls.css";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { faPause, faPlay, faStop } from "@fortawesome/free-solid-svg-icons";
import { pauseArena, startArena, stopArena } from "../redux/ArenaSlice";
import { Icon } from "./components/Icon";
import { areBotsValid } from "../domain/arena/BotConfigurationEntity";

export const UIControls: React.VFC = () => {
    const { running, bots } = useAppSelector((state) => state.arena);
    const dispatch = useAppDispatch();

    const isValid = areBotsValid(bots);
    const playIconClass = isValid ? "controls-icon" : "disabled";

    const icon = !running ? (
        <Icon
            icon={faPlay}
            title="Battle!"
            className={playIconClass + " play fa-2xl"}
            onClick={() => isValid && dispatch(startArena())}
            aria-disabled={!isValid}
        />
    ) : (
        <>
            <Icon
                icon={faPause}
                title="Pause"
                className="controls-icon pause fa-2xl"
                onClick={() => dispatch(pauseArena())}
            />
            <Icon
                icon={faStop}
                title="Stop"
                className="controls-icon stop fa-2xl"
                onClick={() => dispatch(stopArena())}
            />
        </>
    );

    return <div className="controls-container">{icon}</div>;
};
