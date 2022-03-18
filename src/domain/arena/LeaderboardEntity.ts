import { BotConfigurationEntity } from "./BotConfigurationEntity";

export interface LeaderboardEntity {
    id: number;
    name?: string;
    win: number;
    loss: number;
}

export function initBotScore(bot: BotConfigurationEntity): LeaderboardEntity {
    return { id: bot.id, name: bot.name, loss: 0, win: 0 };
}

export function sortByWin(a: LeaderboardEntity, b: LeaderboardEntity): number {
    return b.win - a.win;
}
