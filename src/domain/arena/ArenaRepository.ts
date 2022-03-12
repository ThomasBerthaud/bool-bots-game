import { Application } from "pixi.js";

export interface ArenaRepositorySpec {
    getView: () => HTMLCanvasElement;
    addSprite: (spriteUrl: string) => void;
}

export class ArenaRepository implements ArenaRepositorySpec {
    constructor(private app: Application) {}

    getView(): HTMLCanvasElement {
        return this.app.view;
    }

    addSprite(spriteUrl: string): void {}
}

export const arenaRepository = new ArenaRepository(
    new Application({ width: window.innerWidth, height: window.innerHeight })
);
