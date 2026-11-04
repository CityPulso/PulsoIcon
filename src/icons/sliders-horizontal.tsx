import { createIcon } from "../runtime/createIcon.js";

export const SlidersHorizontal = createIcon("SlidersHorizontal", "sliders-horizontal", {
  nodes: [
    ["path", { d: "M10 5H3" }, { r: "slide", x: 1, a: 2, o: [12, 5] }],
    ["path", { d: "M12 19H3" }, { r: "slide", d: 0.12, x: 1, a: 2, o: [12, 19] }],
    ["path", { d: "M14 3v4" }, { r: "slide", x: 1, a: 2, o: [12, 5] }],
    ["path", { d: "M16 17v4" }, { r: "slide", d: 0.12, x: 1, a: 2, o: [12, 19] }],
    ["path", { d: "M21 12h-9" }, { r: "slide", d: 0.06, x: -1, a: 2, o: [12, 12] }],
    ["path", { d: "M21 19h-5" }, { r: "slide", d: 0.12, x: 1, a: 2, o: [12, 19] }],
    ["path", { d: "M21 5h-7" }, { r: "slide", x: 1, a: 2, o: [12, 5] }],
    ["path", { d: "M8 10v4" }, { r: "slide", d: 0.06, x: -1, a: 2, o: [12, 12] }],
    ["path", { d: "M8 12H3" }, { r: "slide", d: 0.06, x: -1, a: 2, o: [12, 12] }],
  ],
});
