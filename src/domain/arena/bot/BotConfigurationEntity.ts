import { BotConfigurationModel } from "./BotConfigurationModel";

export type BotConfigurationEntity = {
    id: number;
} & Partial<BotConfigurationModel>;

export const checkHasSameName = (bots: BotConfigurationEntity[], botToCheck: BotConfigurationEntity): boolean => {
    return bots.some((bot) => {
        return bot.id !== botToCheck.id && !!bot.name && bot.name === botToCheck.name;
    });
};

export const has2BotsWithSameName = (bots: BotConfigurationEntity[]) => {
    return bots.some((bot) => checkHasSameName(bots, bot));
};
