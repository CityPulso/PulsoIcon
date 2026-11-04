import { createIcon } from "../runtime/createIcon.js";

export const HandGrab = createIcon("HandGrab", "hand-grab", {
  nodes: [
    ["path", { d: "M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4" }, { r: "press", a: 0.08, o: [14, 16] }],
    ["path", { d: "M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" }, { r: "press", a: 0.08, o: [14, 16] }],
    ["path", { d: "M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5" }, { r: "press", a: 0.08, o: [14, 16] }],
    ["path", { d: "M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2" }, { r: "press", a: 0.08, o: [14, 16] }],
    ["path", { d: "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0" }, { r: "press", a: 0.08, o: [14, 16] }],
  ],
});
