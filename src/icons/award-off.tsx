import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "award-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const AwardOff = createIcon("AwardOff", "award-off", {
  nodes: [
    ["path", { d: "M16.72 12.704a6 6 0 0 0 -8.433 -8.418m-1.755 2.24a6 6 0 0 0 7.936 7.944" }, { r: "sway", a: 4, o: [12, 9] }],
    ["path", { d: "M12 15l3.4 5.89l1.598 -3.233l.707 .046m1.108 -2.902l-1.617 -2.8" }, { r: "sway", a: 4, o: [12, 9] }],
    ["path", { d: "M6.802 12l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889" }, { r: "sway", a: 4, o: [12, 9] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.1 }],
  ],
  solid: [
    ["path", { d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" }, { r: "sway", a: 4, o: [12, 9] }],
    ["circle", { cx: "12", cy: "8", r: "6" }, { r: "sway", a: 4, o: [12, 9] }],
    ["circle", { cx: "12", cy: "8", r: "8" }, { r: "sway", a: 4, o: [12, 9] }, "cut"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.1 }, "line"],
  ],
});
