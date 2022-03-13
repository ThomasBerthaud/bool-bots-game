import React from "react";
import "./UIBotPanel.css";
import { useAppDispatch } from "../redux/hooks";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { deleteBot, setBotConfiguration } from "../redux/ArenaSlice";
import { BotConfigurationEntity } from "../domain/arena/bot/BotConfigurationEntity";
import { Icon } from "./components/Icon";
import { BotConfigurationModel, BotDirection, BotOperation } from "../domain/arena/bot/BotConfigurationModel";
import { enumKeys } from "../utils/enumKeys";

export type BotPanelProps = {
    bot: BotConfigurationEntity;
    hasSameNameError: boolean;
};

export const UIBotPanel: React.VFC<BotPanelProps> = ({ bot, hasSameNameError }) => {
    const dispatch = useAppDispatch();

    const dispatchConfigUpdate = (config: Partial<BotConfigurationModel>) => {
        dispatch(setBotConfiguration({ id: bot.id, ...config }));
    };

    const operationOptions = enumKeys(BotOperation).map((operation) => (
        <option key={operation} value={operation}>
            {operation}
        </option>
    ));
    const directionOptions = enumKeys(BotDirection).map((direction) => (
        <option key={direction} value={direction}>
            {direction}
        </option>
    ));

    // TODO handle no name inputted
    return (
        <div className="bot-panel">
            <Icon icon={faXmark} title="Delete bot" className="fa-lg" onClick={() => dispatch(deleteBot(bot.id))} />
            <h3>Bot n°{bot.id + 1}</h3>
            <form>
                <label htmlFor="name" className={hasSameNameError ? "error" : ""}>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={bot.name}
                        onChange={(event) => dispatchConfigUpdate({ name: event.target.value })}
                    />
                </label>
                <label htmlFor="boolean-value">
                    Boolean value:
                    <input
                        type="checkbox"
                        name="boolean-value"
                        checked={bot.booleanValue}
                        onChange={(event) => dispatchConfigUpdate({ booleanValue: event.target.value === "true" })}
                    />
                </label>
                <label htmlFor="speed">
                    Speed:
                    <input
                        type="range"
                        name="speed"
                        value={bot.speed}
                        min="1"
                        max="5"
                        onChange={(event) => dispatchConfigUpdate({ speed: Number(event.target.value) })}
                    />
                </label>
                <label htmlFor="operation">
                    Operation:
                    <select
                        name="operation"
                        id="operation"
                        value={bot.operation}
                        onChange={(event) => dispatchConfigUpdate({ operation: event.target.value as BotOperation })}
                    >
                        <option value="">Choose</option>
                        {operationOptions}
                    </select>
                </label>
                <label htmlFor="direction">
                    Direction:
                    <select
                        name="direction"
                        id="direction"
                        value={bot.direction}
                        onChange={(event) => dispatchConfigUpdate({ direction: event.target.value as BotDirection })}
                    >
                        <option value="">Choose</option>
                        {directionOptions}
                    </select>
                </label>
            </form>
        </div>
    );
};
