import { createIcon } from "../runtime/createIcon.js";

export const Cake = createIcon("Cake", "cake", {
  nodes: [
    ["path", { d: "M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" }, { r: "press", a: 0.05, o: [12, 21] }],
    ["path", { d: "M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" }, { r: "press", a: 0.05, o: [12, 21] }],
    ["path", { d: "M2 21h20" }, { r: "press", a: 0.05, o: [12, 21] }],
    ["path", { d: "M7 8v3" }, { r: "grow", d: 0.1, o: [7, 9.5] }],
    ["path", { d: "M12 8v3" }, { r: "grow", d: 0.16, o: [12, 9.5] }],
    ["path", { d: "M17 8v3" }, { r: "grow", d: 0.22, o: [17, 9.5] }],
    ["path", { d: "M7 4h.01" }, { r: "flicker", d: 0.25, o: [12.005, 4] }],
    ["path", { d: "M12 4h.01" }, { r: "flicker", d: 0.31, o: [12.005, 4] }],
    ["path", { d: "M17 4h.01" }, { r: "flicker", d: 0.37, o: [12.005, 4] }],
  ],
});
