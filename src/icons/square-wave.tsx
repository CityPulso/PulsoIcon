import { createIcon } from "../runtime/createIcon.js";

export const SquareWave = createIcon("SquareWave", "square-wave", {
  nodes: [["path", { d: "M2 16h3V8h7v8h7V8h3" }, { r: "draw", o: [12, 12] }]],
});
