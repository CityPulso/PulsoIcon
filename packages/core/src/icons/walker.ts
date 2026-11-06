import { icon } from "../icon.js";

export const Walker = icon("Walker", "walker", {
  nodes: [
    ["path", { d: "M6 21 8 4h7l3 13.5" }, { r: "slide", x: 1, a: 1.5, o: [12, 12] }],
    ["path", { d: "M7 12h9.8" }, { r: "slide", x: 1, a: 1.5, o: [12, 12] }],
    ["path", { d: "M15 4h3" }, { r: "slide", x: 1, a: 1.5, o: [12, 12] }],
    ["circle", { cx: "18.5", cy: "19.5", r: "1.5" }, { r: "roll", x: 1, a: 1.5, o: [18.5, 19.5] }],
  ],
});
