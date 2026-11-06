import { icon } from "../icon.js";

export const Focus = icon("Focus", "focus", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "3" }, { r: "pulse", a: 0.2, o: [12, 12] }],
    ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }, { r: "slide", x: -1, y: -1, a: 1, o: [5, 5] }],
    ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }, { r: "slide", x: 1, y: -1, a: 1, o: [19, 5] }],
    ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }, { r: "slide", x: 1, y: 1, a: 1, o: [19, 19] }],
    ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }, { r: "slide", x: -1, y: 1, a: 1, o: [5, 19] }],
  ],
});
