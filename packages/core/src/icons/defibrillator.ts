import { icon } from "../icon.js";

export const Defibrillator = icon("Defibrillator", "defibrillator", {
  nodes: [
    ["rect", { x: "2", y: "6", width: "20", height: "14", rx: "2" }, { r: "press", a: 0.03, o: [12, 13] }],
    ["path", { d: "M9 6V4h6v2" }, { r: "lift", y: -1, a: 0, o: [12, 5] }],
    ["path", { d: "M8.5 17l-3-3a2 2 0 0 1 3-2.6 2 2 0 0 1 3 2.6z" }, { r: "beat", a: 0.2, o: [8.5, 14] }],
    ["path", { d: "M17 9.5l-2 3.5h3l-2 3.5" }, { r: "flicker", d: 0.1 }],
  ],
});
