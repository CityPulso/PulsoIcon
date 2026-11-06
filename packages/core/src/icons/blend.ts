import { icon } from "../icon.js";

export const Blend = icon("Blend", "blend", {
  nodes: [
    ["circle", { cx: "15", cy: "9", r: "7" }, { r: "slide", x: 1, y: -1, a: 2, o: [15, 9] }],
    ["circle", { cx: "9", cy: "15", r: "7" }, { r: "slide", x: -1, y: 1, a: 2, o: [9, 15] }],
  ],
});
