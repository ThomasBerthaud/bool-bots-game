export interface MenuOptions {
  content: string;
  icon?: string;
  styles?: string;
}

export class Menu extends HTMLElement {
  protected wrapper!: HTMLSpanElement;

  constructor({ content, icon, styles }: MenuOptions) {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const contentEl = document.createElement("span");
    contentEl.setAttribute("class", "content");
    contentEl.innerHTML = content;

    const styleEl = document.createElement("style");
    styleEl.textContent = styles ?? null;
    shadow.appendChild(styleEl);
    shadow.appendChild(contentEl);

    this.wrapper = contentEl;
  }
}

customElements.define("app-menu", Menu);
