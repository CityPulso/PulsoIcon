import { createIcon } from "../runtime/createIcon.js";

export const RewindStart = createIcon("RewindStart", "rewind-start", {
  nodes: [
    ["path", { d: "M3 5v14" }, { r: "jelly", d: 0.12, o: [3, 12] }],
    ["polygon", { points: "14 6 7 12 14 18" }, { r: "slide", d: 0.06, x: -1, a: 1.5, o: [10.5, 12] }],
    ["polygon", { points: "21 6 14 12 21 18" }, { r: "slide", x: -1, a: 1.5, o: [17.5, 12] }],
  ],
});
