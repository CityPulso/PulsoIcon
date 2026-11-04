import { createIcon } from "../runtime/createIcon.js";

export const ClockArrowLeft = createIcon("ClockArrowLeft", "clock-arrow-left", {
  nodes: [
    ["path", { d: "M12 6v6l1.5.8" }, { r: "spin", a: -360, o: [12, 12] }],
    ["path", { d: "M12.338 21.994a10 10 0 1 1 9.587-8.767" }, { r: "press", a: 0.04, o: [12.001, 12] }],
    ["path", { d: "M14 18h8" }, { r: "bounce", d: 0.15, x: -1, a: 2, o: [18, 18] }],
    ["path", { d: "m18 22-4-4 4-4" }, { r: "bounce", d: 0.15, x: -1, a: 2, o: [18, 18] }],
  ],
});
