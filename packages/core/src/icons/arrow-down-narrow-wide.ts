import { icon } from "../icon.js";

export const ArrowDownNarrowWide = icon("ArrowDownNarrowWide", "arrow-down-narrow-wide", {
  nodes: [
    ["path", { d: "m3 16 4 4 4-4" }, { r: "bounce", y: 1, a: 2, o: [7, 12] }],
    ["path", { d: "M7 20V4" }, { r: "bounce", y: 1, a: 2, o: [7, 12] }],
    ["path", { d: "M11 4h4" }, { r: "growX", o: [11, 8] }],
    ["path", { d: "M11 8h7" }, { r: "growX", d: 0.08, o: [11, 8] }],
    ["path", { d: "M11 12h10" }, { r: "growX", d: 0.16, o: [11, 8] }],
  ],
});
