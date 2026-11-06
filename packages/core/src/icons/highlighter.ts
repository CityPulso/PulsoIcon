import { icon } from "../icon.js";

export const Highlighter = icon("Highlighter", "highlighter", {
  svg: { r: "tilt", a: 10, o: [6, 18] },
  nodes: [
    ["path", { d: "m9 11-6 6v3h9l3-3" }, { r: "redraw", d: 0.15, o: [9, 15.5] }],
    ["path", { d: "m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4" }],
  ],
});
