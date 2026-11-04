import { createIcon } from "../runtime/createIcon.js";

export const Tornado = createIcon("Tornado", "tornado", {
  nodes: [
    ["path", { d: "M21 4H3" }, { r: "sway", a: 3, o: [12, 4] }],
    ["path", { d: "M18 8H6" }, { r: "slide", d: 0.05, x: 1, a: 1, o: [12, 8] }],
    ["path", { d: "M19 12H9" }, { r: "slide", d: 0.1, x: -1, a: 1, o: [14, 12] }],
    ["path", { d: "M16 16h-6" }, { r: "slide", d: 0.15, x: 1, a: 1, o: [13, 16] }],
    ["path", { d: "M11 20H9" }, { r: "slide", d: 0.2, x: -1, a: 1, o: [10, 20] }],
  ],
});
