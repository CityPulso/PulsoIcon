import { createIcon } from "../runtime/createIcon.js";

export const Gpu = createIcon("Gpu", "gpu", {
  nodes: [
    ["path", { d: "M2 17h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H2" }, { r: "press", a: 0.03, o: [12, 12] }],
    ["path", { d: "M2 21V3" }, { r: "press", a: 0.03, o: [12, 12] }],
    ["path", { d: "M7 17v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3" }, { r: "press", a: 0.03, o: [12, 12] }],
    ["circle", { cx: "16", cy: "11", r: "2" }, { r: "spin", d: 0.05, a: 360, o: [16, 11] }],
    ["circle", { cx: "8", cy: "11", r: "2" }, { r: "spin", d: 0.12, a: 360, o: [8, 11] }],
  ],
});
