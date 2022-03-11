import React from "react";
import { BotModel } from "../models/BotModel";

export type BotPanelProps = {
    bot: BotModel;
};

export const BotPanel: React.VFC<BotPanelProps> = ({ bot }) => {
    return <div>{bot.id}</div>;
};
