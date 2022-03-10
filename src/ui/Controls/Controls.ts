import { Menu } from "../components/Menu";
import styles from "./Controls.css";
import iconGear from "../../../assets/icons/gear-solid.svg";

export class Controls extends Menu {
  constructor() {
    super({ iconUrl: iconGear, styles });
  }

  render() {
    return `
      <h1>Handle controls</h1>
      this should display all controls for the game
      <button onclick="function ${this._onClick}">One random button</button>
    `;
  }

  _onClick(event: MouseEvent): void {
    console.log(this, event);
  }
}

customElements.define("app-controls", Controls);
