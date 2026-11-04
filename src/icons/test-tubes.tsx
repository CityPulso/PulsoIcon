import { createIcon } from "../runtime/createIcon.js";

export const TestTubes = createIcon("TestTubes", "test-tubes", {
  nodes: [
    ["path", { d: "M9 2v17.5A2.5 2.5 0 0 1 6.5 22A2.5 2.5 0 0 1 4 19.5V2" }, { r: "sway", a: 8, o: [6.5, 2] }],
    ["path", { d: "M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5V2" }, { r: "sway", d: 0.08, a: -8, o: [17.5, 2] }],
    ["path", { d: "M3 2h7" }, { r: "sway", a: 8, o: [6.5, 2] }],
    ["path", { d: "M14 2h7" }, { r: "sway", d: 0.08, a: -8, o: [17.5, 2] }],
    ["path", { d: "M9 16H4" }, { r: "redraw", d: 0.1, o: [6.5, 16] }],
    ["path", { d: "M20 16h-5" }, { r: "redraw", d: 0.18, o: [17.5, 16] }],
  ],
});
