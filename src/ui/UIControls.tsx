import React from "react";
import styles from "./UIControls.module.css";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { faPause, faPlay, faStop } from "@fortawesome/free-solid-svg-icons";
import { pauseArena, startArena, stopArena } from "../redux/ArenaSlice";
import { UIIcon } from "./components/UIIcon";
import { areBotsValid } from "../domain/arena/BotConfigurationEntity";
import { UITooltip } from "./components/UITooltip";
import classNames from "classnames";

export const UIControls: React.VFC = () => {
    const { running, bots } = useAppSelector((state) => state.arena);
    const dispatch = useAppDispatch();

    const isValid = areBotsValid(bots);
    const playIconClass = isValid ? styles.controlsIcon : styles.disabled;

    const icon = !running ? (
        <UIIcon
            icon={faPlay}
            title="Battle!"
            className={classNames(playIconClass, styles.play, "fa-2xl")}
            onClick={() => isValid && dispatch(startArena())}
            aria-disabled={!isValid}
        />
    ) : (
        <div className={styles.playingButtons}>
            <UIIcon
                icon={faPause}
                title="Pause"
                className={classNames([styles.controlsIcon, styles.pause, "fa-2xl"])}
                onClick={() => dispatch(pauseArena())}
            />
            <UIIcon
                icon={faStop}
                title="Stop"
                className={classNames([styles.controlsIcon, styles.stop, "fa-2xl"])}
                onClick={() => dispatch(stopArena())}
            />
        </div>
    );

    return (
        <div className={styles.controlsContainer}>
            <UITooltip direction="bottom" label="Something is wrong with your bot configurations !" disabled={isValid}>
                {icon}
            </UITooltip>
        </div>
    );
};
