import React from "react";
import "./UIControls.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { faPause, faPlay, faStop } from "@fortawesome/free-solid-svg-icons";
import { pauseArena, startArena, stopArena } from "../redux/ArenaSlice";

export const UIControls: React.VFC = () => {
    const playing = useAppSelector((state) => state.arena.running);
    const dispatch = useAppDispatch();

    return !playing ? (
        <FontAwesomeIcon icon={faPlay} className="controls-icon play fa-2xl" onClick={() => dispatch(startArena())} />
    ) : (
        <>
            <FontAwesomeIcon
                icon={faStop}
                className="controls-icon stop fa-2xl"
                onClick={() => dispatch(stopArena())}
            />
            <FontAwesomeIcon
                icon={faPause}
                className="controls-icon pause fa-2xl"
                onClick={() => dispatch(pauseArena())}
            />
        </>
    );
};
