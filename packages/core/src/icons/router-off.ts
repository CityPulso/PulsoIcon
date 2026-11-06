import { icon } from "../icon.js";

// Adapted from Tabler Icons "router-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const RouterOff = icon("RouterOff", "router-off", {
  nodes: [
    ["path", { d: "M17 13h2a2 2 0 0 1 2 2v2m-.588 3.417c-.362 .36 -.861 .583 -1.412 .583h-14a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2h8" }],
    ["path", { d: "M17 17v.01" }, { r: "flicker", d: 0.05, o: [15, 17] }],
    ["path", { d: "M13 17v.01" }, { r: "flicker", d: 0.05, o: [15, 17] }],
    ["path", { d: "M12.226 8.2a4 4 0 0 1 6.024 .55" }, { r: "fade", o: [15, 10] }],
    ["path", { d: "M9.445 5.407a8 8 0 0 1 12.055 1.093" }, { r: "fade", d: 0.12, o: [15, 10] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2" }],
    ["path", { d: "M6.01 18H6" }, { r: "flicker", d: 0.05, o: [15, 17] }, "line"],
    ["path", { d: "M10.01 18H10" }, { r: "flicker", d: 0.05, o: [15, 17] }, "line"],
    ["path", { d: "M15 10v4", fill: "none" }, { r: "flicker", d: 0.05, o: [15, 17] }],
    ["path", { d: "M17.84 7.17a4 4 0 0 0-5.66 0", fill: "none" }, { r: "fade", o: [15, 10] }],
    ["path", { d: "M20.66 4.34a8 8 0 0 0-11.31 0", fill: "none" }, { r: "fade", d: 0.12, o: [15, 10] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
