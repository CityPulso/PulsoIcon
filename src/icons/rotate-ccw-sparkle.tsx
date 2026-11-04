import { createIcon } from "../runtime/createIcon.js";

export const RotateCcwSparkle = createIcon("RotateCcwSparkle", "rotate-ccw-sparkle", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }, { r: "spin", a: -360, o: [12, 12] }],
    ["path", { d: "M3 3v5h5" }, { r: "spin", a: -360, o: [12, 12] }],
    ["path", { d: "M12 15.5a3.5 3.5 0 0 1 3.5-3.5a3.5 3.5 0 0 1-3.5-3.5a3.5 3.5 0 0 1-3.5 3.5a3.5 3.5 0 0 1 3.5 3.5" }, { r: "twinkle", d: 0.3, o: [12, 12] }],
  ],
});
