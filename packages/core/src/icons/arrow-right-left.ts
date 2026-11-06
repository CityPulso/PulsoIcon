import { icon } from "../icon.js";

export const ArrowRightLeft = icon("ArrowRightLeft", "arrow-right-left", {
  nodes: [
    ["path", { d: "m16 3 4 4-4 4" }, { r: "slide", x: 1, a: 2, o: [12, 7] }],
    ["path", { d: "M20 7H4" }, { r: "slide", x: 1, a: 2, o: [12, 7] }],
    ["path", { d: "m8 21-4-4 4-4" }, { r: "slide", d: 0.1, x: -1, a: 2, o: [12, 17] }],
    ["path", { d: "M4 17h16" }, { r: "slide", d: 0.1, x: -1, a: 2, o: [12, 17] }],
  ],
});
