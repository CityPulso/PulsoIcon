import { createIcon } from "../runtime/createIcon.js";

export const RotateCcwClock = createIcon("RotateCcwClock", "rotate-ccw-clock", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }, { r: "spin", a: -360, o: [12, 12] }],
    ["path", { d: "M3 3v5h5" }, { r: "spin", a: -360, o: [12, 12] }],
    ["path", { d: "M12 7v5l4 2" }, { r: "spin", d: 0.05, a: 360, o: [12, 12] }],
  ],
});
