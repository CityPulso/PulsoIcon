import { icon } from "../icon.js";

// Adapted from Tabler Icons "browser-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BrowserOff = icon("BrowserOff", "browser-off", {
  nodes: [
    ["path", { d: "M8 4h11a1 1 0 0 1 1 1v11m-.288 3.702a1 1 0 0 1 -.712 .298h-14a1 1 0 0 1 -1 -1v-14c0 -.276 .112 -.526 .293 -.707" }],
    ["path", { d: "M4 8h4m4 0h8" }, { r: "growX", o: [4, 8] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M4 8h16" }, { r: "growX", o: [4, 8] }, "line"],
    ["path", { d: "M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12" }],
    ["path", { d: "M8 4v4" }, { r: "growX", o: [4, 8] }, "line"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
