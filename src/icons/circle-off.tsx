import { createIcon } from "../runtime/createIcon.js";

export const CircleOff = createIcon("CircleOff", "circle-off", {
  nodes: [
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.1, o: [12, 12] }],
    ["path", { d: "M8.35 2.69A10 10 0 0 1 21.3 15.65" }, { r: "fade", o: [11.988, 12.009] }],
    ["path", { d: "M19.08 19.08A10 10 0 1 1 4.92 4.92" }, { r: "fade", o: [11.988, 12.009] }],
  ],
});
