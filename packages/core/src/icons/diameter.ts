import { icon } from "../icon.js";

export const Diameter = icon("Diameter", "diameter", {
  nodes: [
    ["circle", { cx: "19", cy: "19", r: "2" }, { r: "slide", x: 1, y: 1, a: 1.5, o: [19, 19] }],
    ["circle", { cx: "5", cy: "5", r: "2" }, { r: "slide", x: -1, y: -1, a: 1.5, o: [5, 5] }],
    ["path", { d: "M6.48 3.66a10 10 0 0 1 13.86 13.86" }, { r: "fade", d: 0.2, o: [12, 12] }],
    ["path", { d: "m6.41 6.41 11.18 11.18" }, { r: "draw", d: 0.1, o: [12, 12] }],
    ["path", { d: "M3.66 6.48a10 10 0 0 0 13.86 13.86" }, { r: "fade", d: 0.2, o: [12, 12] }],
  ],
});
