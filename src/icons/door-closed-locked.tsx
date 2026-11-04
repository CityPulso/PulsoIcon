import { createIcon } from "../runtime/createIcon.js";

export const DoorClosedLocked = createIcon("DoorClosedLocked", "door-closed-locked", {
  nodes: [
    ["path", { d: "M19 8V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16" }, { r: "press", a: 0.03, o: [12, 21] }],
    ["path", { d: "M2 21h8" }, { r: "press", a: 0.03, o: [12, 21] }],
    ["path", { d: "M20 16v-2a2 2 0 00-4 0v2" }, { r: "lift", d: 0.05, o: [18, 14] }],
    ["path", { d: "M9 12h.01" }, { r: "press", a: 0.03, o: [12, 21] }],
    ["rect", { x: "14", y: "16", width: "8", height: "5", rx: "1" }, { r: "shake", d: 0.2, a: 1, o: [18, 18.5] }],
  ],
});
