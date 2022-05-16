/** @jsxImportSource @emotion/react */
import React from "react";
import { UIMenu } from "./components/UIMenu";
import { UIBotPanel } from "./components/UIBotPanel";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addBot, deleteBot, setBotConfiguration } from "../redux/ArenaSlice";
import {
    areBotsValid,
    BotConfigurationEntity,
    checkHasSameName,
    has2BotsWithSameName,
} from "../domain/arena/BotConfigurationEntity";
import { UIButton } from "./components/UIButton";
import { css } from "@emotion/react";

const nameErrorStyle = css`
    color: var(--error);
    margin-top: var(--spacing-lg);
    font-weight: 700;
`;

const botsStyle = css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: var(--spacing-sm);
    margin: var(--spacing) 0;
    max-height: calc(100vh - 240px);
    overflow: auto;
`;

export const UIConfiguration: React.VFC = () => {
    const bots = useAppSelector((state) => state.arena.bots);
    const dispatch = useAppDispatch();

    const dispatchConfigUpdate = (config: BotConfigurationEntity) => {
        dispatch(setBotConfiguration(config));
    };

    const dispatchDeleteBot = (botId: number) => {
        dispatch(deleteBot(botId));
    };

    const botPanels = bots.map((bot) => (
        <UIBotPanel
            key={bot.id}
            bot={bot}
            hasSameNameError={checkHasSameName(bots, bot)}
            onUpdate={dispatchConfigUpdate}
            onDelete={dispatchDeleteBot}
        />
    ));

    return (
        <UIMenu
            icon={faGear}
            iconColor={areBotsValid(bots) ? undefined : "#f44336"}
            activeIconColor={areBotsValid(bots) ? "#651fff" : "#f44336"}
            iconTitle="Configuration"
            position="left"
        >
            <h2 className="text-center">Bots Configuration</h2>
            {has2BotsWithSameName(bots) && <div css={nameErrorStyle}>Sorry two bots can&apos;t have the same name</div>}
            <div css={botsStyle}>{botPanels}</div>
            <UIButton type="primary" label="Add a bot" onClick={() => dispatch(addBot())} />
        </UIMenu>
    );
};
