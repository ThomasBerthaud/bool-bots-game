import { Application, SCALE_MODES, Sprite } from "pixi.js";
import { BotConfigurationModel, BotDirection } from "./BotConfigurationModel";
import { BotModel } from "./BotModel";
import { BotConfigurationEntity } from "./BotConfigurationEntity";
import { randomFromInterval } from "../../utils/rand";
import { startingBots } from "../../data/startingBots";
import { Store } from "@reduxjs/toolkit";
import { store } from "../../redux/store";
import { arenaSlice } from "../../redux/ArenaSlice";

export interface ArenaRepositorySpec {
    getView: () => HTMLCanvasElement;
    setBots(botsConfig: BotConfigurationModel[]): void;
    start(): void;
    stop(): void;
    reset(): void;
}

const HEADER_HEIGHT = 64;
const BOT_SIZE = 16;

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
    private playSpeed = 2;

    constructor(private app: Application, private store: Store) {
        this.setBots(startingBots);
        app.ticker.add((delta) => {
            this.run(delta);
        });
    }

    get time() {
        return this.elapsed;
    }

    private setElapsedTime(time: number) {
        this.elapsed = time;
        this.store.dispatch(arenaSlice.actions.setElapsedTime(this.elapsed));
    }

    private createBot(botConfig: BotConfigurationModel): void {
        // TODO refacto sizing
        const sprite = Sprite.from("src/assets/favicon.svg", {
            height: BOT_SIZE,
            width: BOT_SIZE,
        });
        sprite.x = randomFromInterval(0, this.app.screen.width - BOT_SIZE);
        sprite.y = randomFromInterval(0, this.app.screen.height - BOT_SIZE);
        this.app.stage.addChild(sprite);
        this.bots.push({ ...botConfig, sprite });
    }

    private updateBot(index: number, updatedBot: BotConfigurationEntity): void {
        this.bots[index] = { ...this.bots[index], ...updatedBot };
    }

    private run(delta: number): void {
        if (this.running) {
            this.setElapsedTime(this.elapsed + delta);
            this.bots.forEach((bot) => {
                bot.sprite.x += this.nextPosX(bot);
                bot.sprite.y += this.nextPosY(bot);
            });
        }
    }

    private nextPosX(bot: BotModel): number {
        // TODO check for out of bound
        return DIRECTION_X_WEIGHT[bot.direction] * bot.speed * this.playSpeed;
    }

    private nextPosY(bot: BotModel): number {
        // TODO check for out of bound
        return DIRECTION_Y_WEIGHT[bot.direction] * bot.speed * this.playSpeed;
    }

    getView(): HTMLCanvasElement {
        return this.app.view;
    }

    setBots(botsConfig: BotConfigurationEntity[]): void {
        botsConfig.forEach((updatedBot) => {
            const alreadyStoredBotIndex = this.bots.findIndex((storedBot) => storedBot.id === updatedBot.id);
            if (alreadyStoredBotIndex !== -1) {
                this.updateBot(alreadyStoredBotIndex, updatedBot);
                console.log("updating bot: ", this.bots[alreadyStoredBotIndex]);
            } else {
                this.createBot(updatedBot as BotModel);
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
        this.setElapsedTime(0);
        // TODO reset simulation (same position or random again ?)
    }
}

export const arenaRepository = new ArenaRepository(
    new Application({
        width: window.innerWidth - 10,
        height: window.innerHeight - 10 - HEADER_HEIGHT,
        backgroundColor: 0xeceff1,
    }),
    store
);
