import { createIcon } from "../runtime/createIcon.js";

export const CircleX = createIcon("CircleX", "circle-x", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "m15 9-6 6" }, { r: "draw", d: 0.15, o: [12, 12] }],
    ["path", { d: "m9 9 6 6" }, { r: "draw", d: 0.25, o: [12, 12] }],
  ],
});
