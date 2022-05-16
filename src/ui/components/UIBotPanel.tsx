/** @jsxImportSource @emotion/react */
import React from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { BotConfigurationEntity } from "../../domain/arena/BotConfigurationEntity";
import { UIIcon } from "./UIIcon";
import { BotConfigurationModel, BotDirection, BotOperation } from "../../domain/arena/BotConfigurationModel";
import { enumKeys } from "../../utils/enumKeys";
import { css } from "@emotion/react";

const botPanelStyle = css`
    position: relative;
    border: 1px solid var(--panel-border);
    border-radius: var(--border-radius-sm);
    padding: var(--spacing-sm);
    background-color: var(--white);

    label {
        display: flex;
        margin: var(--spacing-sm) 0;
        gap: var(--spacing-sm);
    }
    input[type="range"] {
        margin: 0;
        width: 100%;
    }
    select {
        width: 100%;
    }
`;

const titleStyle = css`
    margin-bottom: var(--spacing);
`;

const closeStyle = css`
    cursor: pointer;
    position: absolute;
    right: 6px;
    top: 2px;
`;

const errorStyle = css`
    &,
    & input {
        color: var(--error);
        font-weight: 700;
    }

    span {
        font-size: 13.33333px;
    }
`;

const nameStyle = css`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

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
        <div css={botPanelStyle}>
            <UIIcon
                icon={faXmark}
                title="Delete bot"
                className="fa-lg"
                css={closeStyle}
                onClick={() => onDelete(bot.id)}
            />
            <h3 css={titleStyle}>Bot n°{bot.id + 1}</h3>
            <form>
                <label htmlFor="name" css={(hasSameNameError || !bot.name) && errorStyle}>
                    Name:
                    <div css={nameStyle}>
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
