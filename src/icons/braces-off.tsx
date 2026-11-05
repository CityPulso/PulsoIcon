import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "braces-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BracesOff = createIcon("BracesOff", "braces-off", {
  nodes: [
    ["path", { d: "M5.176 5.177c-.113 .251 -.176 .53 -.176 .823v3c0 1.657 -.895 3 -2 3c1.105 0 2 1.343 2 3v3a2 2 0 0 0 2 2" }, { r: "slide", x: -1, a: 1, o: [4, 12] }],
    ["path", { d: "M17 4a2 2 0 0 1 2 2v3c0 1.657 .895 3 2 3c-1.105 0 -2 1.343 -2 3m-.176 3.821a2 2 0 0 1 -1.824 1.179" }, { r: "slide", x: 1, a: 1, o: [20, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
  solid: [
    ["path", { d: "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1", fill: "none" }, { r: "slide", x: -1, a: 1, o: [4, 12] }],
    ["path", { d: "M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1", fill: "none" }, { r: "slide", x: 1, a: 1, o: [20, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
