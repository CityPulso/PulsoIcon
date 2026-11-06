import { icon } from "../icon.js";

// Adapted from Tabler Icons "device-tv-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TvOff = icon("TvOff", "tv-off", {
  nodes: [
    ["path", { d: "M11 7h8a2 2 0 0 1 2 2v8m-1.178 2.824c-.25 .113 -.529 .176 -.822 .176h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h2" }, { r: "flicker", d: 0.1, o: [12, 13] }],
    ["path", { d: "M16 3l-4 4l-4 -4" }, { r: "sway", a: 10, o: [12, 7] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "m17 2-5 5-5-5", fill: "none" }, { r: "sway", a: 10, o: [12, 7] }],
    ["rect", { width: "20", height: "15", x: "2", y: "7", rx: "2" }, { r: "flicker", d: 0.1, o: [12, 13] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
