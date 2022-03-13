import React from "react";
import "./UIControls.css";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { faPause, faPlay, faStop } from "@fortawesome/free-solid-svg-icons";
import { pauseArena, startArena, stopArena } from "../redux/ArenaSlice";
import { Icon } from "./components/Icon";

export const UIControls: React.VFC = () => {
    const playing = useAppSelector((state) => state.arena.running);
    const dispatch = useAppDispatch();

    // TODO disable button when bots are not valid
    const icon = !playing ? (
        <Icon
            icon={faPlay}
            title="Battle!"
            className="controls-icon play fa-2xl"
            onClick={() => dispatch(startArena())}
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
