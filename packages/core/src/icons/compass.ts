import { icon } from "../icon.js";

export const Compass = icon("Compass", "compass", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" }, { r: "spin", d: 0.05, a: 360, o: [12, 12] }],
  ],
});
