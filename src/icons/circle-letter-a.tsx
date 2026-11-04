import { createIcon } from "../runtime/createIcon.js";

export const CircleLetterA = createIcon("CircleLetterA", "circle-letter-a", {
  nodes: [
    ["path", { d: "M15 14H9" }, { r: "growX", d: 0.3, o: [12, 14] }],
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "m8 16 3.453-7.648a.6.6 0 0 1 1.094 0L16 16" }, { r: "draw", d: 0.1, o: [12, 11.999] }],
  ],
});
