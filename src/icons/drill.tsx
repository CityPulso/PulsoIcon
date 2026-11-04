import { createIcon } from "../runtime/createIcon.js";

export const Drill = createIcon("Drill", "drill", {
  nodes: [
    ["path", { d: "M10 18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3 1 1 0 0 1 1-1z" }, { r: "fade", o: [6.5, 20] }],
    ["path", { d: "M13 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1l-.81 3.242a1 1 0 0 1-.97.758H8" }, { r: "shake", a: 0.6, o: [8, 10] }],
    ["path", { d: "M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3" }, { r: "spin", a: 720, o: [16, 6] }],
    ["path", { d: "M18 6h4" }, { r: "shake", x: 1, a: 1, o: [20, 6] }],
    ["path", { d: "m5 10-2 8" }, { r: "shake", a: 0.6, o: [8, 10] }],
    ["path", { d: "m7 18 2-8" }, { r: "shake", a: 0.6, o: [8, 10] }],
  ],
});
