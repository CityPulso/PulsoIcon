import { createIcon } from "../runtime/createIcon.js";

export const CircleLetterV = createIcon("CircleLetterV", "circle-letter-v", {
  nodes: [
    ["path", { d: "m9 8 2.525 7.66a.5.5 0 0 0 .95 0L15 8" }, { r: "draw", d: 0.1, o: [12, 12.002] }],
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "spin", a: 90, o: [12, 12] }],
  ],
});
