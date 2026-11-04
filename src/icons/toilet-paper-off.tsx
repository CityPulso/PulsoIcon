import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "toilet-paper-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ToiletPaperOff = createIcon("ToiletPaperOff", "toilet-paper-off", {
  nodes: [
    ["path", { d: "M4.27 4.28c-.768 1.27 -1.27 3.359 -1.27 5.72c0 3.866 1.343 7 3 7s3 -3.134 3 -7c0 -.34 -.01 -.672 -.03 -1" }, { r: "press", a: 0.08, o: [12, 11] }],
    ["path", { d: "M21 10c0 -3.866 -1.343 -7 -3 -7" }, { r: "press", a: 0.08, o: [12, 11] }],
    ["path", { d: "M7 3h11" }, { r: "press", a: 0.08, o: [12, 11] }],
    ["path", { d: "M21 10v7m-1.513 2.496l-1.487 -.496l-3 2l-3 -3l-3 2v-10" }, { r: "slide", x: 1, a: 1 }],
    ["path", { d: "M6 10h.01" }, { r: "press", a: 0.08, o: [12, 11] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
});
