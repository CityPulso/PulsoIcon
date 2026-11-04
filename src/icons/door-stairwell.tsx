import { createIcon } from "../runtime/createIcon.js";

export const DoorStairwell = createIcon("DoorStairwell", "door-stairwell", {
  nodes: [
    ["path", { d: "M12 17v-3a1 1 0 011-1h6" }, { r: "float", d: 0.08, a: 1, o: [15.5, 15] }],
    ["path", { d: "M19 17h-9a1 1 0 00-1 1v3" }, { r: "float", d: 0.16, a: 1, o: [14, 19] }],
    ["path", { d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16" }, { r: "press", a: 0.03, o: [12, 21] }],
    ["path", { d: "M19 9h-3a1 1 0 00-1 1v3" }, { r: "float", a: 1, o: [17, 11] }],
    ["path", { d: "M22 21H2" }, { r: "growX", o: [12, 21] }],
  ],
});
