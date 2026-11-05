import { createIcon } from "../runtime/createIcon.js";

export const MathFunctionSparkle = createIcon("MathFunctionSparkle", "math-function-sparkle", {
  text: true,
  nodes: [
    ["path", { d: "M3 19a2 2 0 0 0 2 2c2 0 2-4 3-9s1-9 3-9a2 2 0 0 1 2 2" }, { r: "draw" }],
    ["path", { d: "M5 12h6" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M18 19a4 4 0 0 1 4-4a4 4 0 0 1-4-4a4 4 0 0 1-4 4a4 4 0 0 1 4 4" }, { r: "twinkle", d: 0.35, o: [18, 15] }],
  ],
});
