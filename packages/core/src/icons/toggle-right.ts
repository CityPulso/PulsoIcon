import { icon } from "../icon.js";

export const ToggleRight = icon("ToggleRight", "toggle-right", {
  nodes: [
    ["circle", { cx: "15", cy: "12", r: "3" }, { r: "slide", x: -1, a: 6, o: [15, 12] }],
    ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "7" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
