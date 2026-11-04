import { createIcon } from "../runtime/createIcon.js";

export const Stethoscope = createIcon("Stethoscope", "stethoscope", {
  nodes: [
    ["path", { d: "M11 2v2" }, { r: "swing", a: 6, o: [8, 3] }],
    ["path", { d: "M5 2v2" }, { r: "swing", a: 6, o: [8, 3] }],
    ["path", { d: "M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" }, { r: "swing", a: 6, o: [8, 3] }],
    ["path", { d: "M8 15a6 6 0 0 0 12 0v-3" }, { r: "swing", d: 0.05, a: 12, o: [20, 10] }],
    ["circle", { cx: "20", cy: "10", r: "2" }, { r: "swing", d: 0.05, a: 12, o: [20, 10] }],
  ],
});
