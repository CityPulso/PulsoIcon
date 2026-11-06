import { icon } from "../icon.js";

// Adapted from Tabler Icons "trophy-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TrophyOff = icon("TrophyOff", "trophy-off", {
  nodes: [
    ["path", { d: "M8 21h8" }, { r: "press", o: [12, 21] }],
    ["path", { d: "M12 17v4" }, { r: "press", o: [12, 21] }],
    ["path", { d: "M8 4h9" }, { r: "wobble", o: [12, 17] }],
    ["path", { d: "M17 4v8c0 .31 -.028 .612 -.082 .905m-1.384 2.632a5 5 0 0 1 -8.534 -3.537v-5" }, { r: "wobble", o: [12, 17] }],
    ["path", { d: "M3 9a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "wobble", o: [12, 17] }],
    ["path", { d: "M17 9a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "wobble", o: [12, 17] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    ["path", { d: "M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2", fill: "none" }, { r: "press", o: [12, 21] }],
    ["path", { d: "M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2", fill: "none" }, { r: "press", o: [12, 21] }],
    ["path", { d: "M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3", fill: "none" }, { r: "wobble", o: [12, 17] }],
    ["path", { d: "M4 22h16", fill: "none" }, { r: "press", o: [12, 21] }],
    ["path", { d: "M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z" }, { r: "wobble", o: [12, 17] }],
    ["path", { d: "M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3", fill: "none" }, { r: "wobble", o: [12, 17] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
