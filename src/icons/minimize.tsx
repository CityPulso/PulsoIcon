import { createIcon } from "../runtime/createIcon.js";

export const Minimize = createIcon("Minimize", "minimize", {
  nodes: [
    ["path", { d: "M8 3v3a2 2 0 0 1-2 2H3" }, { r: "slide", x: 1, y: 1, a: 1.5, o: [5.5, 5.5] }],
    ["path", { d: "M21 8h-3a2 2 0 0 1-2-2V3" }, { r: "slide", x: -1, y: 1, a: 1.5, o: [18.5, 5.5] }],
    ["path", { d: "M3 16h3a2 2 0 0 1 2 2v3" }, { r: "slide", x: 1, y: -1, a: 1.5, o: [5.5, 18.5] }],
    ["path", { d: "M16 21v-3a2 2 0 0 1 2-2h3" }, { r: "slide", x: -1, y: -1, a: 1.5, o: [18.5, 18.5] }],
  ],
});
