import { createIcon } from "../runtime/createIcon.js";

export const DoorOpen = createIcon("DoorOpen", "door-open", {
  nodes: [
    ["path", { d: "M10 21H2" }, { r: "growX", d: 0.05, o: [6, 21] }],
    ["path", { d: "M10 3H7a2 2 0 00-2 2v16" }, { r: "fade", o: [7.5, 12] }],
    ["path", { d: "M14 12h.01" }, { r: "pop", d: 0.25, o: [14.005, 12] }],
    ["path", { d: "M19 21V5a2 2 0 00-1.675-1.974l-6.163-1.013A1 1 0 0010 3v18a1 1 0 001.124.992z" }, { r: "flip", o: [10, 12] }],
    ["path", { d: "M22 21h-3" }, { r: "growX", d: 0.05, o: [20.5, 21] }],
  ],
});
