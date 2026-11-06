import { icon } from "../icon.js";

// Drawn after Phosphor Icons "key-return" (MIT, Copyright (c) 2023 Phosphor Icons).
export const KeyReturn = icon("KeyReturn", "key-return", {
  nodes: [
    ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M17 8v3a2 2 0 0 1-2 2H7" }, { r: "redraw", d: 0.1, o: [12, 10.5] }],
    ["path", { d: "m10 10-3 3 3 3" }, { r: "slide", d: 0.25, x: -1, a: 1.5, o: [8.5, 13] }],
  ],
});
