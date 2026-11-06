import { icon } from "../icon.js";

// Adapted from Iconoir "expand-lines" (MIT, Copyright (c) 2021 Luca Burgio).
export const ExpandLines = icon("ExpandLines", "expand-lines", {
  nodes: [
    ["path", { d: "M18 2L6 2" }],
    ["path", { d: "M18 22L6 22" }],
    ["path", { d: "M12 14V19M12 19L15 16M12 19L9 16" }, { r: "slide", y: 1, a: 1.5 }],
    ["path", { d: "M12 10V5M12 5L15 8M12 5L9 8" }, { r: "slide", y: -1, a: 1.5 }],
  ],
});
