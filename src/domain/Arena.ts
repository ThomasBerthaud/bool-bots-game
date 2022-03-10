import { Application, IApplicationOptions } from "pixi.js";

export class Arena {
  app: Application;

  constructor(document: Document, options?: IApplicationOptions) {
    this.app = new Application(options);
    document.body.appendChild(this.app.view);
  }

  addSprite(path: string): void {
    throw new Error("unimplemented" + path);
  }
}
