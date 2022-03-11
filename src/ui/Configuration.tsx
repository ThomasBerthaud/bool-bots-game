import "./Configuration.css";
import React from "react";
import { Menu } from "./components/Menu";
import { BotPanel } from "./BotPanel";
import { BotModel } from "../models/BotModel";
import { faGear } from "@fortawesome/free-solid-svg-icons";

export const Configuration: React.VFC = () => {
    // TODO use redux to get / set game state
    const { bots, addBot } = { bots: [] as BotModel[], addBot: () => {} };
    const botPanels = bots.map((bot) => <BotPanel key={bot.id} bot={bot} />);

    return (
        <Menu icon={faGear}>
            <h2 className="text-center">Configuration</h2>
            <div className="bots">{botPanels}</div>
            <button onClick={addBot} className="btn primary">
                Add a bot
            </button>
        </Menu>
    );
};
