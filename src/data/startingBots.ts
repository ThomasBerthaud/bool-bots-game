import { BotConfigurationModel, BotDirection, BotOperation } from "../domain/arena/bot/BotConfigurationModel";

export const startingBots: BotConfigurationModel[] = [
    {
        id: 0,
        name: "Jarvis",
        booleanValue: true,
        direction: BotDirection.NORTH,
        operation: BotOperation.AND,
        speed: 1,
    },
    {
        id: 1,
        name: "John",
        booleanValue: false,
        direction: BotDirection.WEST,
        operation: BotOperation.OR,
        speed: 1,
    },
];
