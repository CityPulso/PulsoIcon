import { icon } from "../icon.js";

// Adapted from Tabler Icons "spy-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SpyOff = icon("SpyOff", "spy-off", {
  nodes: [
    ["path", { d: "M3 11h8m4 0h6" }, { r: "lift", y: -1, a: 0, o: [12, 11] }],
    ["path", { d: "M5 11v-4c0 -.571 .16 -1.105 .437 -1.56m2.563 -1.44h8a3 3 0 0 1 3 3v4" }, { r: "lift", y: -1, a: 0, o: [12, 11] }],
    ["path", { d: "M4 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "blink", o: [7, 17] }],
    ["path", { d: "M14.88 14.877a3 3 0 1 0 4.239 4.247m.59 -3.414a3.012 3.012 0 0 0 -1.425 -1.422" }, { r: "blink", o: [17, 17] }],
    ["path", { d: "M10 17h4" }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    ["path", { d: "M3 11h18", fill: "none" }, { r: "lift", y: -1, a: 0, o: [12, 11] }],
    ["path", { d: "M5 11v-4a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v4", fill: "none" }, { r: "lift", y: -1, a: 0, o: [12, 11] }],
    ["path", { d: "M4 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "blink", o: [7, 17] }],
    ["path", { d: "M14 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "blink", o: [17, 17] }],
    ["path", { d: "M10 17h4", fill: "none" }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
