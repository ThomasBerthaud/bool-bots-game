export enum BotOperation {
    AND = "AND",
    OR = "OR",
    XOR = "XOR",
    NOT = "NOT",
    COND = "COND",
    EQUALS = "EQUALS",
}

export enum BotDirection {
    NORTH = "NORTH",
    EAST = "EAST",
    SOUTH = "SOUTH",
    WEST = "WEST",
}

export interface BotConfigurationModel {
    id: number;
    name: string;
    booleanValue: boolean;
    operation: BotOperation;
    speed: number;
    direction: BotDirection;
}
