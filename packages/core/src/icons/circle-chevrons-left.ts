import { icon } from "../icon.js";

export const CircleChevronsLeft = icon("CircleChevronsLeft", "circle-chevrons-left", {
  nodes: [
    ["path", { d: "M10 9L7 12L10 15" }, { r: "slide", d: 0.08, x: -1, a: 2, o: [8.5, 12] }],
    ["path", { d: "M16 9L13 12L16 15" }, { r: "slide", x: -1, a: 2, o: [14.5, 12] }],
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.05, o: [12, 12] }],
  ],
});
