import { Application, Sprite } from "pixi.js";
import { BotConfigurationModel, BotDirection } from "./BotConfigurationModel";
import { BotModel } from "./BotModel";
import { BotConfigurationEntity } from "./BotConfigurationEntity";
import { randomFromInterval } from "../../utils/rand";
import { startingBots } from "../../data/startingBots";

export interface ArenaRepositorySpec {
    getView: () => HTMLCanvasElement;
    setBots(botsConfig: BotConfigurationModel[]): void;
    start(): void;
    stop(): void;
    reset(): void;
}

const HEADER_HEIGHT = 32;
const BOT_SIZE = 64;

const DIRECTION_X_WEIGHT: { [key in BotDirection]: number } = {
    [BotDirection.WEST]: -1,
    [BotDirection.EAST]: 1,
    [BotDirection.NORTH]: 0,
    [BotDirection.SOUTH]: 0,
};

const DIRECTION_Y_WEIGHT: { [key in BotDirection]: number } = {
    [BotDirection.WEST]: 0,
    [BotDirection.EAST]: 0,
    [BotDirection.NORTH]: 1,
    [BotDirection.SOUTH]: 1,
};

export class ArenaRepository implements ArenaRepositorySpec {
    private bots: BotModel[] = [];
    private running = false;
    private elapsed = 0;

    constructor(private app: Application) {
        this.setBots(startingBots);
        app.ticker.add((delta) => {
            this.run(delta);
        });
    }

    private createBot(botConfig: BotConfigurationModel): BotModel {
        const sprite = Sprite.from("src/assets/favicon.svg");
        // TODO improve sprite sizing
        sprite.height = BOT_SIZE;
        sprite.width = BOT_SIZE;
        sprite.x = randomFromInterval(HEADER_HEIGHT, this.app.screen.width);
        sprite.y = randomFromInterval(HEADER_HEIGHT, this.app.screen.height);
        this.app.stage.addChild(sprite);
        return { ...botConfig, sprite };
    }

    private run(delta: number): void {
        if (this.running) {
            this.elapsed += delta;
            this.bots.forEach((bot) => {
                bot.sprite.x += this.nextPosX(bot);
                bot.sprite.y += this.nextPosY(bot);
            });
        }
    }

    private nextPosX(bot: BotModel): number {
        // TODO check for out of bound
        return DIRECTION_X_WEIGHT[bot.direction] * bot.speed;
    }

    private nextPosY(bot: BotModel): number {
        // TODO check for out of bound
        return DIRECTION_Y_WEIGHT[bot.direction] * bot.speed;
    }

    getView(): HTMLCanvasElement {
        return this.app.view;
    }

    setBots(botsConfig: BotConfigurationEntity[]): void {
        botsConfig.forEach((updatedBot) => {
            const alreadyStoredBotIndex = this.bots.findIndex((storedBot) => storedBot.id === updatedBot.id);
            if (alreadyStoredBotIndex !== -1) {
                this.bots[alreadyStoredBotIndex] = { ...this.bots[alreadyStoredBotIndex], ...updatedBot };
                console.log("updating bot: ", this.bots[alreadyStoredBotIndex]);
            } else {
                this.bots.push(this.createBot(updatedBot as BotModel));
                console.log("init new bot: ", this.bots[this.bots.length - 1]);
            }
        });
    }

    start(): void {
        this.running = true;
    }

    stop(): void {
        this.running = false;
    }

    reset(): void {
        this.running = false;
        // TODO reset simulation (same position or random again ?)
    }
}

export const arenaRepository = new ArenaRepository(
    new Application({
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundColor: 0xeceff1,
    })
);
