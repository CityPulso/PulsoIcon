import { createIcon } from "../runtime/createIcon.js";

export const RedoDot = createIcon("RedoDot", "redo-dot", {
  nodes: [
    ["circle", { cx: "12", cy: "17", r: "1" }, { r: "pop", d: 0.15, o: [12, 17] }],
    ["path", { d: "M21 7v6h-6" }, { r: "spin", a: 40, o: [12, 12] }],
    ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" }, { r: "spin", a: 40, o: [12, 12] }],
  ],
});
