import { createIcon } from "../runtime/createIcon.js";

export const Sweep3d = createIcon("Sweep3d", "sweep-3d", {
  nodes: [
    ["circle", { cx: "6", cy: "18", r: "3" }, { r: "slide", x: 1, y: -1, a: 1, o: [6, 18] }],
    ["path", { d: "M9 18c5 0 9-4 9-13" }, { r: "draw", d: 0.1, o: [13.5, 11.5] }],
    ["path", { d: "m15 8 3-3 3 3" }, { r: "pop", d: 0.5, o: [18, 6.5] }],
  ],
});
