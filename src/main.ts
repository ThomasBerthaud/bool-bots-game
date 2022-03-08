import "./style.css";
import { Arena } from "./ui/Arena";
import "./ui/Controls/Controls";
import "./ui/Configuration";
import "./ui/Leaderboard";

const arena = new Arena(document, { width: window.innerWidth, height: window.innerHeight });
console.log(arena);
