import { createIcon } from "../runtime/createIcon.js";

export const MathFunctionPlus = createIcon("MathFunctionPlus", "math-function-plus", {
  nodes: [
    ["path", { d: "M3 19a2 2 0 0 0 2 2c2 0 2-4 3-9s1-9 3-9a2 2 0 0 1 2 2" }, { r: "draw" }],
    ["path", { d: "M5 12h6" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M18 12v6" }, { r: "spin", d: 0.35, a: 90, o: [18, 15] }],
    ["path", { d: "M15 15h6" }, { r: "spin", d: 0.35, a: 90, o: [18, 15] }],
  ],
});
