import { icon } from "../icon.js";

export const CornerUpLeft = icon("CornerUpLeft", "corner-up-left", {
  nodes: [
    ["path", { d: "M20 20v-7a4 4 0 0 0-4-4H4" }, { r: "redraw", o: [12, 14.5] }],
    ["path", { d: "M9 14 4 9l5-5" }, { r: "slide", d: 0.2, x: -1, a: 1.5, o: [6.5, 9] }],
  ],
});
