import { icon } from "../icon.js";

export const PillBottle = icon("PillBottle", "pill-bottle", {
  nodes: [
    ["path", { d: "M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4" }, { r: "fade", d: 0.1, o: [15.5, 14.5] }],
    ["path", { d: "M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7" }, { r: "shake", d: 0.1, a: 1, o: [12, 14.5] }],
    ["rect", { width: "16", height: "5", x: "4", y: "2", rx: "1" }, { r: "lift", o: [12, 4.5] }],
  ],
});
