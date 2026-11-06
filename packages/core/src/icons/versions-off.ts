import { icon } from "../icon.js";

// Adapted from Tabler Icons "versions-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const VersionsOff = icon("VersionsOff", "versions-off", {
  nodes: [
    ["path", { d: "M10.184 6.162a2 2 0 0 1 1.816 -1.162h6a2 2 0 0 1 2 2v9m-1.185 2.827a1.993 1.993 0 0 1 -.815 .173h-6a2 2 0 0 1 -2 -2v-7" }],
    ["path", { d: "M7 7v10" }, { r: "slide", d: 0.05, x: -1, y: 0, a: 0.6, o: [7, 12] }],
    ["path", { d: "M4 8v8" }, { r: "slide", x: -1, y: 0, a: 1, o: [4, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M10 7a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2l0 -10" }],
    ["path", { d: "M7 7l0 10", fill: "none" }, { r: "slide", d: 0.05, x: -1, y: 0, a: 0.6, o: [7, 12] }],
    ["path", { d: "M4 8l0 8", fill: "none" }, { r: "slide", x: -1, y: 0, a: 1, o: [4, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
