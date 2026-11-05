import { createIcon } from "../runtime/createIcon.js";

export const DoorClosed = createIcon("DoorClosed", "door-closed", {
  nodes: [
    ["path", { d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16" }, { r: "open", o: [5, 12] }],
    ["path", { d: "M2 21h20" }, { r: "growX", d: 0.05, o: [12, 21] }],
    ["path", { d: "M9 12h.01" }, { r: "pop", d: 0.25, o: [9.005, 12] }],
  ],
});
