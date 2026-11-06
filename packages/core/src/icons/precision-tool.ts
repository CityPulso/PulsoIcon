import { icon } from "../icon.js";

// Adapted from Iconoir "precision-tool" (MIT, Copyright (c) 2021 Luca Burgio).
export const PrecisionTool = icon("PrecisionTool", "precision-tool", {
  nodes: [
    ["path", { d: "M12 6L12 8" }, { r: "slide", x: 0, y: 1, a: 1.2, o: [12, 7] }],
    ["path", { d: "M12 16L12 18" }, { r: "slide", x: 0, y: -1, a: 1.2, o: [12, 17] }],
    ["path", { d: "M8 12H6" }, { r: "slide", x: 1, y: 0, a: 1.2, o: [7, 12] }],
    ["path", { d: "M18 12H16" }, { r: "slide", x: -1, y: 0, a: 1.2, o: [17, 12] }],
    ["path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" }],
  ],
});
