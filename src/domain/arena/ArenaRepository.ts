import { Application, Sprite } from "pixi.js";
import { BotConfigurationModel } from "./BotConfigurationModel";

export interface ArenaRepositorySpec {
    getView: () => HTMLCanvasElement;
    addBot(config: BotConfigurationModel): void;
    start(): void;
    stop(): void;
}

export class ArenaRepository implements ArenaRepositorySpec {
    private botsConfig: BotConfigurationModel[] = [];

    constructor(private app: Application) {
        const sprite = Sprite.from("src/assets/favicon.svg");
        app.stage.addChild(sprite);

        console.log(app.ticker.started);

        // Add a ticker callback to move the sprite back and forth
        let elapsed = 0.0;
        app.ticker.add((delta) => {
            elapsed += delta;
            sprite.x = 100.0 + Math.cos(elapsed / 50.0) * 100.0;
        });
    }

    getView(): HTMLCanvasElement {
        return this.app.view;
    }

    addBot(config: BotConfigurationModel): void {
        this.botsConfig.push(config);
    }

    start(): void {
        this.app.start();
    }

    stop(): void {
        this.app.stop();
    }
}

export const arenaRepository = new ArenaRepository(
    new Application({
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundColor: 0xffffff,
        autoStart: false,
    })
);
