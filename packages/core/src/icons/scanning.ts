import { icon } from "../icon.js";

// Adapted from Iconoir "scanning" (MIT, Copyright (c) 2021 Luca Burgio).
export const Scanning = icon("Scanning", "scanning", {
  nodes: [
    ["path", { d: "M6 3H3V6" }],
    ["path", { d: "M2 12H12L22 12" }, { r: "slide", x: 0, y: 1, a: 4, o: [12, 12] }],
    ["path", { d: "M9 19V17V15" }, { r: "flicker", d: 0.1, o: [9, 17] }],
    ["path", { d: "M12 16V15.5V15" }, { r: "flicker", d: 0.15, o: [12, 15.5] }],
    ["path", { d: "M15 17V16V15" }, { r: "flicker", d: 0.2, o: [15, 16] }],
    ["path", { d: "M12 21V19.5V18" }, { r: "flicker", d: 0.25, o: [12, 19.5] }],
    ["path", { d: "M18 3H21V6" }],
    ["path", { d: "M6 21H3V18" }],
    ["path", { d: "M18 21H21V18" }],
  ],
});
