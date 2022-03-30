import "./UIConfiguration.css";
import React from "react";
import { Menu } from "./components/Menu";
import { UIBotPanel } from "./components/UIBotPanel";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addBot } from "../redux/ArenaSlice";
import { areBotsValid, checkHasSameName, has2BotsWithSameName } from "../domain/arena/BotConfigurationEntity";

export const UIConfiguration: React.VFC = () => {
    const bots = useAppSelector((state) => state.arena.bots);
    const dispatch = useAppDispatch();

    const botPanels = bots.map((bot) => (
        <UIBotPanel key={bot.id} bot={bot} hasSameNameError={checkHasSameName(bots, bot)} />
    ));

    const hasErrorsClasName = !areBotsValid(bots) ? "has-errors" : "";

    return (
        <Menu
            icon={faGear}
            iconTitle="Configuration"
            className={`configuration-menu ${hasErrorsClasName}`}
            position="left"
        >
            <h2 className="text-center">Bots Configuration</h2>
            {has2BotsWithSameName(bots) && (
                <div className="name-error">Sorry two bots can&apos;t have the same name</div>
            )}
            <div className="bots">{botPanels}</div>
            <button onClick={() => dispatch(addBot())} className="btn primary">
                Add a bot
            </button>
        </Menu>
    );
};
