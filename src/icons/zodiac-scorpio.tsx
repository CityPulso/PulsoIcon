import { createIcon } from "../runtime/createIcon.js";

export const ZodiacScorpio = createIcon("ZodiacScorpio", "zodiac-scorpio", {
  nodes: [
    ["path", { d: "M10 19V5.5a1 1 0 0 1 5 0V17a2 2 0 0 0 2 2h5l-3-3" }, { r: "draw", o: [12.25, 11] }],
    ["path", { d: "m22 19-3 3" }, { r: "slide", d: 0.25, x: 1, y: 1, a: 1.5, o: [20.5, 20.5] }],
    ["path", { d: "M5 19V5.5a1 1 0 0 1 5 0" }, { r: "draw", o: [12.25, 11] }],
    ["path", { d: "M5 5.5A2.5 2.5 0 0 0 2.5 3" }, { r: "draw", o: [12.25, 11] }],
  ],
});
