import { createIcon } from "../runtime/createIcon.js";

export const UndoDot = createIcon("UndoDot", "undo-dot", {
  nodes: [
    ["path", { d: "M21 17a9 9 0 0 0-15-6.7L3 13" }, { r: "spin", a: -40, o: [12, 12] }],
    ["path", { d: "M3 7v6h6" }, { r: "spin", a: -40, o: [12, 12] }],
    ["circle", { cx: "12", cy: "17", r: "1" }, { r: "pop", d: 0.15, o: [12, 17] }],
  ],
});
