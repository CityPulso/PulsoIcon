import { createIcon } from "../runtime/createIcon.js";

export const CircleLetterQ = createIcon("CircleLetterQ", "circle-letter-q", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "4" }, { r: "draw", d: 0.1, o: [12, 12] }],
    ["path", { d: "m16 16-2.5-2.5" }, { r: "slide", d: 0.3, x: 1, y: 1, a: 1, o: [14.75, 14.75] }],
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "spin", a: 90, o: [12, 12] }],
  ],
});
