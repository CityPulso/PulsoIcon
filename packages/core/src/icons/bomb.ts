import { icon } from "../icon.js";

export const Bomb = icon("Bomb", "bomb", {
  nodes: [
    ["circle", { cx: "11", cy: "13", r: "9" }, { r: "jelly", d: 0.2, a: 0.1, o: [11, 13] }],
    ["path", { d: "M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95" }, { r: "redraw", o: [18.178, 5.824] }],
    ["path", { d: "m22 2-1.5 1.5" }, { r: "flicker", o: [21.25, 2.75] }],
  ],
});
