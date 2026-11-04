import { createIcon } from "../runtime/createIcon.js";

export const Island = createIcon("Island", "island", {
  nodes: [
    ["path", { d: "M4 18a8 3 0 0 1 16 0" }, { r: "rise", a: 1.5, o: [12, 17] }],
    ["path", { d: "M11 16c0-3.5.5-6.5 2-9" }, { r: "sway", a: 6, o: [11, 16] }],
    ["path", { d: "M13 7c-1.5-2-5-2.5-7-.5" }, { r: "sway", a: 6, o: [11, 16] }],
    ["path", { d: "M13 7c1-2 4-3 6-2" }, { r: "sway", a: 6, o: [11, 16] }],
    ["path", { d: "M13 7c2 0 4.5 1.5 5 4" }, { r: "sway", a: 6, o: [11, 16] }],
    ["path", { d: "M2 21.5q2.5 1.5 5 0t5 0 5 0 5 0" }, { r: "slide", d: 0.1, x: 1, a: 1.5, o: [12, 21.5] }],
  ],
});
