import { icon } from "../icon.js";

// Drawn after Phosphor Icons "moped-front" (MIT, Copyright (c) 2023 Phosphor Icons).

export const MopedFront = icon("MopedFront", "moped-front", {
  nodes: [
    ["circle", { cx: "12", cy: "5", r: "2" }, { r: "flicker", d: 0.1, o: [12, 5] }],
    ["path", { d: "M4 5h6" }, { r: "bounce", y: -1, a: 1, o: [12, 12] }],
    ["path", { d: "M14 5h6" }, { r: "bounce", y: -1, a: 1, o: [12, 12] }],
    ["path", { d: "M8 18v-6a4 4 0 0 1 8 0v6" }, { r: "bounce", y: -1, a: 1, o: [12, 12] }],
    ["rect", { x: "10", y: "13", width: "4", height: "8", rx: "2" }, { r: "press", d: 0.1, a: 0.1, o: [12, 21] }],
  ],
});
