import { createIcon } from "../runtime/createIcon.js";

export const DoorClosedPackage = createIcon("DoorClosedPackage", "door-closed-package", {
  nodes: [
    ["path", { d: "M18 13v3" }, { r: "drop", d: 0.1, a: 3, o: [18, 17] }],
    ["path", { d: "M19 9V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16" }, { r: "press", a: 0.03, o: [12, 21] }],
    ["path", { d: "M2 21h8" }, { r: "press", a: 0.03, o: [12, 21] }],
    ["path", { d: "M9 12h.01" }, { r: "press", a: 0.03, o: [12, 21] }],
    ["rect", { x: "14", y: "13", width: "8", height: "8", rx: "1" }, { r: "drop", d: 0.1, a: 3, o: [18, 17] }],
  ],
});
