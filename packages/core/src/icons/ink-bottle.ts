import { icon } from "../icon.js";

export const InkBottle = icon("InkBottle", "ink-bottle", {
  nodes: [
    ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1" }, { r: "lift", y: -1, a: -8, o: [12, 4] }],
    ["path", { d: "M10 6v3l-4.106 2.053A1.6 1.6 0 0 0 5 12.5V19a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6.5a1.6 1.6 0 0 0-.894-1.447L14 9V6" }],
    ["path", { d: "M5 15.5c2.333-1 4.667 1 7 0s4.667-1 7 0" }, { r: "sway", d: 0.1, a: 4, o: [12, 18] }],
  ],
});
