import "./style.css";

const controls = document.querySelector<HTMLDivElement>("#controls");
const canvas = document.querySelector<HTMLCanvasElement>("#main-canvas");

if (!controls || !canvas) {
  throw new Error("controls tags not found");
}

controls.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
