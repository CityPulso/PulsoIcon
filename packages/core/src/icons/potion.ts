import { icon } from "../icon.js";

export const Potion = icon("Potion", "potion", {
  nodes: [
    ["rect", { x: "9", y: "2", width: "6", height: "3", rx: "1" }, { r: "lift", d: 0.05, y: -1, a: 1.5, o: [12, 3.5] }],
    ["path", { d: "M10 5v3.29a7 7 0 1 0 4 0V5" }, { r: "wobble", a: 5, o: [12, 15] }],
    ["path", { d: "M5.2 14.5c2.27 1 4.53 1 6.8 0s4.53-1 6.8 0" }, { r: "sway", d: 0.1, a: 6, o: [12, 15] }],
    ["path", { d: "M10 18.5h.01" }, { r: "float", d: 0.15, a: 2, o: [10, 18.5] }],
    ["path", { d: "M14 18h.01" }, { r: "float", d: 0.3, a: 2, o: [14, 18] }],
  ],
});
