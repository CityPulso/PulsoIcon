import { createIcon } from "../runtime/createIcon.js";

export const River = createIcon("River", "river", {
  nodes: [
    ["path", { d: "M5 2c0 5 6 5 6 10s-6 5-6 10" }, { r: "draw", o: [8, 12] }],
    ["path", { d: "M13 2c0 5 6 5 6 10s-6 5-6 10" }, { r: "draw", d: 0.05, o: [16, 12] }],
    ["path", { d: "M14 12h2" }, { r: "slide", d: 0.2, y: 1, a: 1.5, o: [15, 12] }],
    ["path", { d: "M8 19h2" }, { r: "slide", d: 0.3, y: 1, a: 1.5, o: [9, 19] }],
  ],
});
