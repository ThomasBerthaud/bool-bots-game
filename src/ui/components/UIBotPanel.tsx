import React from "react";
import "./UIBotPanel.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { BotConfigurationEntity } from "../../domain/arena/BotConfigurationEntity";
import { UIIcon } from "./UIIcon";
import { BotConfigurationModel, BotDirection, BotOperation } from "../../domain/arena/BotConfigurationModel";
import { enumKeys } from "../../utils/enumKeys";

export type BotPanelProps = {
    bot: BotConfigurationEntity;
    hasSameNameError: boolean;
    onUpdate: (botConfiguration: BotConfigurationEntity) => void;
    onDelete: (botId: number) => void;
};

export const UIBotPanel: React.VFC<BotPanelProps> = ({ bot, hasSameNameError, onUpdate, onDelete }) => {
    const onConfigUpdate = (config: Partial<BotConfigurationModel>) => {
        onUpdate({ id: bot.id, ...config });
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

    return (
        <div className="bot-panel">
            <UIIcon icon={faXmark} title="Delete bot" className="fa-lg" onClick={() => onDelete(bot.id)} />
            <h3>Bot n°{bot.id + 1}</h3>
            <form>
                <label htmlFor="name" className={hasSameNameError || !bot.name ? "error" : ""}>
                    Name:
                    <div className="name-input">
                        <input
                            type="text"
                            name="name"
                            value={bot.name}
                            onChange={(event) => onConfigUpdate({ name: event.target.value })}
                        />
                        {!bot.name && <span>You need to provide a name</span>}
                    </div>
                </label>
                <label htmlFor="boolean-value">
                    Boolean value:
                    <input
                        type="checkbox"
                        name="boolean-value"
                        checked={bot.booleanValue}
                        onChange={(event) => onConfigUpdate({ booleanValue: event.target.checked })}
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
                        onChange={(event) => onConfigUpdate({ speed: Number(event.target.value) })}
                    />
                </label>
                <label htmlFor="operation">
                    Operation:
                    <select
                        name="operation"
                        id="operation"
                        value={bot.operation}
                        onChange={(event) => onConfigUpdate({ operation: event.target.value as BotOperation })}
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
                        onChange={(event) => onConfigUpdate({ direction: event.target.value as BotDirection })}
                    >
                        <option value="">Choose</option>
                        {directionOptions}
                    </select>
                </label>
            </form>
        </div>
    );
};
