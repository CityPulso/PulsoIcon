import { createIcon } from "../runtime/createIcon.js";

export const RotateCcwKey = createIcon("RotateCcwKey", "rotate-ccw-key", {
  nodes: [
    ["path", { d: "M12 7v6" }, { r: "turn", d: 0.1, a: 30, o: [12, 15] }],
    ["path", { d: "M12 9h2" }, { r: "turn", d: 0.1, a: 30, o: [12, 15] }],
    ["path", { d: "M3 12a9 9 0 1 0 9-9 9.74 9.74 0 0 0-6.74 2.74L3 8" }, { r: "spin", a: -360, o: [12, 12] }],
    ["path", { d: "M3 3v5h5" }, { r: "spin", a: -360, o: [12, 12] }],
    ["circle", { cx: "12", cy: "15", r: "2" }, { r: "turn", d: 0.1, a: 30, o: [12, 15] }],
  ],
});
