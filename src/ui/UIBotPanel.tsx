import React from "react";
import "./UIBotPanel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BotConfigurationModel } from "../domain/arena/bot/BotConfigurationModel";
import { useAppDispatch } from "../redux/hooks";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { deleteBot } from "../redux/ArenaSlice";

export type BotPanelProps = {
    bot: BotConfigurationModel;
};

export const UIBotPanel: React.VFC<BotPanelProps> = ({ bot }) => {
    const dispatch = useAppDispatch();

    return (
        <div className="bot-panel">
            {bot.id}
            <FontAwesomeIcon icon={faXmark} onClick={() => dispatch(deleteBot(bot.id))} />
        </div>
    );
};
