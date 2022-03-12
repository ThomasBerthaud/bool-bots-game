import "./UIConfiguration.css";
import React from "react";
import { Menu } from "./components/Menu";
import { UIBotPanel } from "./UIBotPanel";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addBot } from "../redux/ArenaSlice";

export const UIConfiguration: React.VFC = () => {
    const bots = useAppSelector((state) => state.arena.bots);
    const dispatch = useAppDispatch();

    const botPanels = bots.map((bot) => <UIBotPanel key={bot.id} bot={bot} />);

    return (
        <Menu icon={faGear} className="configuration-menu">
            <h2 className="text-center">Configuration</h2>
            <div className="bots">{botPanels}</div>
            <button onClick={() => dispatch(addBot())} className="btn primary">
                Add a bot
            </button>
        </Menu>
    );
};
