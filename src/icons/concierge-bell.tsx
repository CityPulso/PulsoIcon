import { createIcon } from "../runtime/createIcon.js";

export const ConciergeBell = createIcon("ConciergeBell", "concierge-bell", {
  nodes: [
    ["path", { d: "M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z" }, { r: "fade", o: [12, 18] }],
    ["path", { d: "M20 16a8 8 0 1 0-16 0" }, { r: "press", a: 0.1, o: [12, 16] }],
    ["path", { d: "M12 4v4" }, { r: "bounce", d: 0.05, y: -1, a: 1.5, o: [12, 6] }],
    ["path", { d: "M10 4h4" }, { r: "bounce", d: 0.05, y: -1, a: 1.5, o: [12, 6] }],
  ],
});
