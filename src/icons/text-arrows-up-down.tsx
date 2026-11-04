import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "text-arrows-up-down" (MIT, Copyright (c) 2021 Luca Burgio).
export const TextArrowsUpDown = createIcon("TextArrowsUpDown", "text-arrows-up-down", {
  nodes: [
    ["path", { d: "M18 21V11M18 21L16 18.5M18 21L20 18.5M18 11L16 13M18 11L20 13" }, { r: "bounce", x: 0, y: 1, a: 1.5 }],
    ["path", { d: "M9 5L9 17M9 17H7M9 17H11" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M15 7V5L3 5L3 7" }, { r: "draw", d: 0.1 }],
  ],
});
