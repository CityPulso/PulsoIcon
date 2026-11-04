import { createIcon } from "../runtime/createIcon.js";

export const Toolbox = createIcon("Toolbox", "toolbox", {
  nodes: [
    ["path", { d: "M16 12v4" }, { r: "grow", d: 0.1, o: [16, 14] }],
    ["path", { d: "M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" }, { r: "lift", d: 0.05, o: [12, 4] }],
    ["path", { d: "M17 6a2 2 0 011.414.586l3 3A2 2 0 0122 11v8a2 2 0 01-2 2H4a2 2 0 01-2-2v-8a2 2 0 01.586-1.414l3-3A2 2 0 017 6z" }, { r: "press", a: 0.04, o: [12, 21] }],
    ["path", { d: "M2 14h20" }, { r: "press", a: 0.04, o: [12, 21] }],
    ["path", { d: "M8 12v4" }, { r: "grow", d: 0.1, o: [8, 14] }],
  ],
});
