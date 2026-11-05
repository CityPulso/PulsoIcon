import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "storm-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const StormOff = createIcon("StormOff", "storm-off", {
  nodes: [
    ["path", { d: "M9.884 9.874a3 3 0 1 0 4.24 4.246m.57 -3.441a3.012 3.012 0 0 0 -1.41 -1.39" }, { r: "spin", d: 0, o: [12, 12] }],
    ["path", { d: "M7.037 7.063a7 7 0 0 0 9.907 9.892m1.585 -2.426a7 7 0 0 0 -9.058 -9.059" }, { r: "spin", d: 0, o: [12, 12] }],
    ["path", { d: "M5.369 14.236c-1.605 -3.428 -1.597 -6.673 -1 -9.849" }, { r: "spin", d: 0, o: [12, 12] }],
    ["path", { d: "M18.63 9.76a14.323 14.323 0 0 1 1.368 6.251m-.37 3.608c-.087 .46 -.187 .92 -.295 1.377" }, { r: "spin", d: 0, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "spin", d: 0, o: [12, 12] }, "cut"],
    ["path", { d: "M5 12a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" }, { r: "spin", d: 0, o: [12, 12] }],
    ["path", { d: "M5.369 14.236c-1.839 -3.929 -1.561 -7.616 -.704 -11.236", fill: "none" }, { r: "spin", d: 0, o: [12, 12] }],
    ["path", { d: "M18.63 9.76c1.837 3.928 1.561 7.615 .703 11.236", fill: "none" }, { r: "spin", d: 0, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
