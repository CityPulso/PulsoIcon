import { icon } from "../icon.js";

export const CornerDownRight = icon("CornerDownRight", "corner-down-right", {
  nodes: [
    ["path", { d: "m15 10 5 5-5 5" }, { r: "slide", d: 0.2, x: 1, a: 1.5, o: [17.5, 15] }],
    ["path", { d: "M4 4v7a4 4 0 0 0 4 4h12" }, { r: "redraw", o: [12, 9.5] }],
  ],
});
