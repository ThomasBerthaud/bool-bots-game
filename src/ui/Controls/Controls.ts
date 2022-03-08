import { Menu } from "../components/Menu";
import content from "./Controls.html?raw";
import styles from "./Controls.css";

export class Controls extends Menu {
  constructor() {
    super({ content, styles });
    console.log("initialized");
  }

  connectedCallback() {
    console.log("connected");
  }
}

customElements.define("app-controls", Controls);
