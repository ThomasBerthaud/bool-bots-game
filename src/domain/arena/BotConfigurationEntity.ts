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

export const areBotsValid = (bots: BotConfigurationEntity[]) => {
    if (bots.some((bot) => !bot.name)) {
        return false;
    }
    if (has2BotsWithSameName(bots)) {
        return false;
    }
    return true;
};
