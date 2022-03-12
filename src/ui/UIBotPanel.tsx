import React from "react";
import { BotConfigurationModel } from "../domain/arena/bot/BotConfigurationModel";

export type BotPanelProps = {
    bot: BotConfigurationModel;
};

export const UIBotPanel: React.VFC<BotPanelProps> = ({ bot }) => {
    return <div>{bot.id}</div>;
};
