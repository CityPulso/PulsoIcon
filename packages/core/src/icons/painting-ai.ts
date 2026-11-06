import { icon } from "../icon.js";

export const PaintingAi = icon("PaintingAi", "painting-ai", {
  text: true,
  nodes: [
    ["path", { d: "M11 15H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v7" }, { r: "press", a: 0.04, o: [12, 9] }],
    ["path", { d: "m4 13 4-4 3 3" }, { r: "draw", d: 0.05 }],
    ["circle", { cx: "15.5", cy: "7", r: "1.5" }, { r: "rise", d: 0.1, a: 2, o: [15.5, 7] }],
    ["path", { d: "m8 15-2 6" }],
    ["path", { d: "M11 15v2" }],
    ["path", { d: "M14 21v-4a2 2 0 1 1 4 0v4" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M14 19h4" }, { r: "draw", d: 0.3 }],
    ["path", { d: "M21 15v6" }, { r: "draw", d: 0.4 }],
  ],
});
