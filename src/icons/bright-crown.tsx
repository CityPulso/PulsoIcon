import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "bright-crown" (MIT, Copyright (c) 2021 Luca Burgio).
export const BrightCrown = createIcon("BrightCrown", "bright-crown", {
  nodes: [
    ["path", { d: "M22 12L23 12" }, { r: "draw", d: 0.18 }],
    ["path", { d: "M12 2V1" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M12 23V22" }, { r: "draw", d: 0.26 }],
    ["path", { d: "M20 20L19 19" }, { r: "draw", d: 0.22 }],
    ["path", { d: "M20 4L19 5" }, { r: "draw", d: 0.14 }],
    ["path", { d: "M4 20L5 19" }, { r: "draw", d: 0.3 }],
    ["path", { d: "M4 4L5 5" }, { r: "draw", d: 0.38 }],
    ["path", { d: "M1 12L2 12" }, { r: "draw", d: 0.34 }],
    ["path", { d: "M16.8 15.5L18 8.5L13.8 10.6L12 8.5L10.2 10.6L6 8.5L7.2 15.5H16.8Z" }, { r: "bounce", x: 0, y: -1, a: 1.5 }],
  ],
});
