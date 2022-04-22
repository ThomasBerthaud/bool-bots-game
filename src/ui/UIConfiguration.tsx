import styles from "./UIConfiguration.module.css";
import React from "react";
import { UIMenu } from "./components/UIMenu";
import { UIBotPanel } from "./components/UIBotPanel";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addBot, deleteBot, setBotConfiguration } from "../redux/ArenaSlice";
import { BotConfigurationEntity, checkHasSameName, has2BotsWithSameName } from "../domain/arena/BotConfigurationEntity";
import { UIButton } from "./components/UIButton";

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
            iconTitle="Configuration"
            // className={classNames(styles.configurationMenu, {
            //     [styles.hasErrors]: !areBotsValid(bots),
            // })}
            position="left"
        >
            <h2 className="text-center">Bots Configuration</h2>
            {has2BotsWithSameName(bots) && (
                <div className={styles.nameError}>Sorry two bots can&apos;t have the same name</div>
            )}
            <div className={styles.bots}>{botPanels}</div>
            <UIButton type="primary" label="Add a bot" onClick={() => dispatch(addBot())} />
        </UIMenu>
    );
};
