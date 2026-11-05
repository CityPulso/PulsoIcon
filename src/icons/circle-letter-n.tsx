import { createIcon } from "../runtime/createIcon.js";

export const CircleLetterN = createIcon("CircleLetterN", "circle-letter-n", {
  text: true,
  nodes: [
    ["path", { d: "M9 16V8.576a.496.496 0 01.937-.243l4.126 7.43A.496.496 0 0015 15.52V8" }, { r: "draw", d: 0.1, o: [12, 12.016] }],
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "spin", a: 90, o: [12, 12] }],
  ],
});
