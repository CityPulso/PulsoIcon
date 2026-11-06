import { icon } from "../icon.js";

export const ArrowUpNarrowWide = icon("ArrowUpNarrowWide", "arrow-up-narrow-wide", {
  nodes: [
    ["path", { d: "m3 8 4-4 4 4" }, { r: "bounce", y: -1, a: 2, o: [7, 12] }],
    ["path", { d: "M7 4v16" }, { r: "bounce", y: -1, a: 2, o: [7, 12] }],
    ["path", { d: "M11 12h4" }, { r: "growX", o: [11, 16] }],
    ["path", { d: "M11 16h7" }, { r: "growX", d: 0.08, o: [11, 16] }],
    ["path", { d: "M11 20h10" }, { r: "growX", d: 0.16, o: [11, 16] }],
  ],
});
