import { createIcon } from "../runtime/createIcon.js";

export const ClockArrowRight = createIcon("ClockArrowRight", "clock-arrow-right", {
  nodes: [
    ["path", { d: "M12 6v6l2 1" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "M13.5 21.885A10 10 0 1 1 22 12" }, { r: "press", a: 0.04, o: [12, 11.998] }],
    ["path", { d: "M14 18h8" }, { r: "bounce", d: 0.15, x: 1, a: 2, o: [18, 18] }],
    ["path", { d: "m18 22 4-4-4-4" }, { r: "bounce", d: 0.15, x: 1, a: 2, o: [18, 18] }],
  ],
});
