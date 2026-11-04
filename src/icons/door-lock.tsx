import { createIcon } from "../runtime/createIcon.js";

export const DoorLock = createIcon("DoorLock", "door-lock", {
  nodes: [
    ["rect", { x: "5", y: "2", width: "8", height: "20", rx: "4" }, { r: "press", a: 0.03, o: [9, 12] }],
    ["circle", { cx: "9", cy: "7", r: "1.5" }, { r: "turn", d: 0.05, a: 25, o: [9, 7] }],
    ["path", { d: "M10.5 7H19" }, { r: "turn", d: 0.05, a: 25, o: [9, 7] }],
    ["circle", { cx: "9", cy: "14", r: "1" }, { r: "pop", d: 0.25, o: [9, 15] }],
    ["path", { d: "M9 15v2.5" }, { r: "pop", d: 0.25, o: [9, 15] }],
  ],
});
