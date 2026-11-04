import { createIcon } from "../runtime/createIcon.js";

export const PawPrint = createIcon("PawPrint", "paw-print", {
  nodes: [
    ["circle", { cx: "11", cy: "4", r: "2" }, { r: "pop", o: [11, 4] }],
    ["circle", { cx: "18", cy: "8", r: "2" }, { r: "pop", d: 0.08, o: [18, 8] }],
    ["circle", { cx: "20", cy: "16", r: "2" }, { r: "pop", d: 0.16, o: [20, 16] }],
    ["path", { d: "M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" }, { r: "press", d: 0.24, a: 0.1, o: [8, 16] }],
  ],
});
