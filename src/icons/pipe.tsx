import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "pipe" (MIT, Copyright (c) 2023 Phosphor Icons).

export const Pipe = createIcon("Pipe", "pipe", {
  nodes: [
    ["path", { d: "M4 17v-5a7 7 0 0 1 7-7h6" }, { r: "draw", o: [10, 11] }],
    ["path", { d: "M9 17v-5a2 2 0 0 1 2-2h6" }, { r: "draw", d: 0.05, o: [13, 13] }],
    ["rect", { x: "3", y: "17", width: "7", height: "3", rx: "1" }, { r: "press", d: 0.3, a: 0.15, o: [6.5, 18.5] }],
    ["rect", { x: "17", y: "4", width: "3", height: "7", rx: "1" }, { r: "press", d: 0.3, a: 0.15, o: [18.5, 7.5] }],
    ["path", { d: "M5 20v2M8 20v2" }, { r: "fade", d: 0.4, o: [6.5, 21] }],
    ["path", { d: "M20 6h2M20 9h2" }, { r: "fade", d: 0.4, o: [21, 7.5] }],
  ],
});
