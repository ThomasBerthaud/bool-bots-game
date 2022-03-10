import menuStyles from "./Menu.css";
import closeIcon from "../../../assets/icons/xmark-solid.svg";
import { createClickableIcon } from "../../utils/createClickableIcon";

export interface MenuOptions {
  iconUrl: string;
  styles?: string;
}

export class Menu extends HTMLElement {
  constructor({ iconUrl, styles }: MenuOptions) {
    super();

    const contentEl = this.initMenu(iconUrl);

    const styleEl = document.createElement("style");
    styleEl.textContent = styles ?? "";
    const templateEl = document.createElement("div");
    templateEl.innerHTML = this.render();

    contentEl.appendChild(templateEl);
    contentEl.appendChild(styleEl);
  }

  private initMenu(iconUrl: string): HTMLDivElement {
    const shadow = this.attachShadow({ mode: "open" });

    const styleEl = document.createElement("style");
    styleEl.textContent = menuStyles;

    const iconEl = createClickableIcon(iconUrl, (btn) => {
      btn.classList.toggle("hidden");
      contentEl.classList.toggle("active");
    });
    iconEl.classList.add("main-icon");

    const closeEl = createClickableIcon(closeIcon, () => {
      iconEl.classList.toggle("hidden");
      contentEl.classList.toggle("active");
    });
    closeEl.classList.add("close");

    const contentEl = document.createElement("div");
    contentEl.setAttribute("class", "content");
    contentEl.prepend(closeEl);

    shadow.appendChild(styleEl);
    shadow.appendChild(iconEl);
    shadow.appendChild(contentEl);
    return contentEl;
  }

  render(): string {
    return "not implemented";
  }
}

customElements.define("app-menu", Menu);
