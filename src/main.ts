import "./style.css";
import * as PIXI from "pixi.js";

const controls = document.querySelector<HTMLDivElement>("#controls");

if (!controls) {
  // Display an error to User
  throw new Error("controls tags not found");
}

const app = new PIXI.Application({ width: window.innerWidth, height: window.innerHeight });
document.body.appendChild(app.view);
