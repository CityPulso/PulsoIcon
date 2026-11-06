import { icon } from "../icon.js";

// Adapted from Tabler Icons "brackets-angle-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BracketsAngleOff = icon("BracketsAngleOff", "brackets-angle-off", {
  nodes: [
    ["path", { d: "M8 4h.01" }, { r: "slide", x: -1, y: 0, a: 1.5, o: [5, 12] }],
    ["path", { d: "M6.453 6.474l-3.453 5.526l5 8" }, { r: "slide", x: -1, y: 0, a: 1.5, o: [5, 12] }],
    ["path", { d: "M16 4l5 8l-1.917 3.067" }, { r: "slide", x: 1, y: 0, a: 1.5, o: [19, 12] }],
    ["path", { d: "M17.535 17.544l-1.535 2.456" }, { r: "slide", x: 1, y: 0, a: 1.5, o: [19, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M8 4l-5 8l5 8", fill: "none" }, { r: "slide", x: -1, y: 0, a: 1.5, o: [5, 12] }],
    ["path", { d: "M16 4l5 8l-5 8", fill: "none" }, { r: "slide", x: 1, y: 0, a: 1.5, o: [19, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
