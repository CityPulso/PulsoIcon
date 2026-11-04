import { createIcon } from "../runtime/createIcon.js";

export const Stroller = createIcon("Stroller", "stroller", {
  nodes: [
    ["path", { d: "M3 10a7 7 0 0 0 14 0Z" }, { r: "slide", x: 1, a: 1.5, o: [12, 12] }],
    ["path", { d: "M10 10V3a7 7 0 0 0-7 7" }, { r: "turn", a: -15, d: 0.1, o: [10, 10] }],
    ["path", { d: "M17 10 19 4h2" }, { r: "slide", x: 1, a: 1.5, o: [12, 12] }],
    ["circle", { cx: "6", cy: "20", r: "2" }, { r: "roll", x: 1, a: 1.5, o: [6, 20] }],
    ["circle", { cx: "14", cy: "20", r: "2" }, { r: "roll", x: 1, a: 1.5, o: [14, 20] }],
  ],
});
