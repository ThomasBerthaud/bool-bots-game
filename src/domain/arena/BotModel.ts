import { Sprite } from "pixi.js";
import { BotConfigurationModel } from "./BotConfigurationModel";

export interface BotModel extends BotConfigurationModel {
    sprite: Sprite;
}
