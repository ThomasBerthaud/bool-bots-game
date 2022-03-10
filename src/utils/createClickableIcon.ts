export const createClickableIcon = (
  iconUrl: string,
  listener?: (btn: HTMLElement, event: MouseEvent) => void
): HTMLElement => {
  const iconEl = document.createElement("object");
  iconEl.setAttribute("class", "icon");
  iconEl.setAttribute("data", iconUrl);
  iconEl.setAttribute("type", "image/svg+xml");
  const iconButtonEl = document.createElement("div");
  iconButtonEl.setAttribute("class", "icon-button");
  if (listener) {
    iconButtonEl.addEventListener("click", (event) => listener(iconButtonEl, event));
  }
  iconButtonEl.appendChild(iconEl);
  return iconButtonEl;
};
