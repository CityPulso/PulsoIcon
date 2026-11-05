import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "mask-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MaskOff = createIcon("MaskOff", "mask-off", {
  nodes: [
    ["path", { d: "M19.42 19.41a2 2 0 0 1 -1.42 .59h-12a2 2 0 0 1 -2 -2v-12c0 -.554 .225 -1.055 .588 -1.417m3.412 -.583h10a2 2 0 0 1 2 2v10" }],
    ["path", { d: "M9.885 9.872a3 3 0 1 0 4.245 4.24m.582 -3.396a3.012 3.012 0 0 0 -1.438 -1.433" }, { r: "pulse", a: 0.15, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "pulse", a: 0.15, o: [12, 12] }, "cut"],
    ["path", { d: "M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12" }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
