import { createIcon } from "../runtime/createIcon.js";

export const TrashOff = createIcon("TrashOff", "trash-off", {
  nodes: [
    ["path", { d: "M10 11v6" }, { r: "press", d: 0.05, a: 0.04, o: [12, 22] }],
    ["path", { d: "M14 17v-3" }, { r: "press", d: 0.05, a: 0.04, o: [12, 22] }],
    ["path", { d: "M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-1.576.768" }, { r: "lift", a: -10, o: [3, 6] }],
    ["path", { d: "M19 6v7.344" }, { r: "press", d: 0.05, a: 0.04, o: [12, 22] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.1, o: [12, 12] }],
    ["path", { d: "M21 6h-9.344" }, { r: "lift", a: -10, o: [3, 6] }],
    ["path", { d: "M3 6h3" }, { r: "lift", a: -10, o: [3, 6] }],
    ["path", { d: "M5 6v14a2 2 0 002 2h10a2 2 0 002-2v-1" }, { r: "press", d: 0.05, a: 0.04, o: [12, 22] }],
  ],
  solid: [
    ["path", { d: "M10 11v6" }, { r: "press", d: 0.05, a: 0.04, o: [12, 22] }, "line"],
    ["path", { d: "M14 11v6" }, { r: "press", d: 0.05, a: 0.04, o: [12, 22] }, "line"],
    ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" }, { r: "press", d: 0.05, a: 0.04, o: [12, 22] }],
    ["path", { d: "M3 6h18", fill: "none" }, { r: "lift", a: -10, o: [3, 6] }],
    ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", fill: "none" }, { r: "lift", a: -10, o: [3, 6] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.1, o: [12, 12] }, "line"],
  ],
});
