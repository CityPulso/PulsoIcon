import { createIcon } from "../runtime/createIcon.js";

export const Cigarette = createIcon("Cigarette", "cigarette", {
  nodes: [
    ["path", { d: "M17 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14" }, { r: "press", a: 0.04, o: [2, 14] }],
    ["path", { d: "M18 8c0-2.5-2-2.5-2-5" }, { r: "sway", d: 0.05, a: 10, o: [17, 8] }],
    ["path", { d: "M21 16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" }, { r: "press", a: 0.04, o: [2, 14] }],
    ["path", { d: "M22 8c0-2.5-2-2.5-2-5" }, { r: "sway", d: 0.12, a: 10, o: [21, 8] }],
    ["path", { d: "M7 12v4" }, { r: "press", a: 0.04, o: [2, 14] }],
  ],
});
