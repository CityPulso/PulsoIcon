import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "path-arrow" (MIT, Copyright (c) 2021 Luca Burgio).
export const PathArrow = createIcon("PathArrow", "path-arrow", {
  nodes: [
    ["path", { d: "M18 16.5V3M18 3L21.5 6.5M18 3L14.5 6.5" }, { r: "slide", d: 0.4, x: 0, y: -1, a: 1.5 }],
    ["path", { d: "M18 16.5C18 18.433 16.433 20 14.5 20C12.567 20 11 18.433 11 16.5V7.5" }, { r: "drawBack", d: 0.2 }],
    ["path", { d: "M11 7.5C11 5.567 9.433 4 7.5 4C5.567 4 4 5.567 4 7.5V19.5" }, { r: "drawBack" }],
  ],
});
