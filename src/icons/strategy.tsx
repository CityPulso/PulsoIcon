import { createIcon } from "../runtime/createIcon.js";

export const Strategy = createIcon("Strategy", "strategy", {
  nodes: [
    ["path", { d: "m3 3 4 4" }, { r: "stamp", o: [5, 5] }],
    ["path", { d: "m7 3-4 4" }, { r: "stamp", o: [5, 5] }],
    ["path", { d: "M5 10v2a6 6 0 0 0 6 6h2" }, { r: "draw", d: 0.1, o: [9, 15] }],
    ["path", { d: "m10 15 3 3-3 3" }, { r: "slide", d: 0.3, x: 1, a: 1, o: [11.5, 18] }],
    ["circle", { cx: "18.5", cy: "18", r: "2.5" }, { r: "pop", d: 0.4, o: [18.5, 18] }],
    ["path", { d: "m15 4 4 4" }, { r: "fade", d: 0.2, o: [17, 6] }],
    ["path", { d: "m19 4-4 4" }, { r: "fade", d: 0.2, o: [17, 6] }],
  ],
});
