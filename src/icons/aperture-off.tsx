import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "aperture-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ApertureOff = createIcon("ApertureOff", "aperture-off", {
  nodes: [
    ["path", { d: "M3.6 15h10.55" }, { r: "turn", a: 30, o: [12, 12] }],
    ["path", { d: "M5.641 5.631a9 9 0 1 0 12.719 12.738m1.68 -2.318a9 9 0 0 0 -12.074 -12.098" }],
    ["path", { d: "M7.395 7.534l2.416 7.438" }, { r: "turn", a: 30, o: [12, 12] }],
    ["path", { d: "M17.032 4.636l-4.852 3.526m-2.334 1.695l-1.349 .98" }, { r: "turn", a: 30, o: [12, 12] }],
    ["path", { d: "M20.559 14.51l-8.535 -6.201" }, { r: "turn", a: 30, o: [12, 12] }],
    ["path", { d: "M12.257 20.916l2.123 -6.533m.984 -3.028l.154 -.473" }, { r: "turn", a: 30, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "m14.31 8 5.74 9.94" }, { r: "turn", a: 30, o: [12, 12] }, "line"],
    ["path", { d: "M9.69 8h11.48" }, { r: "turn", a: 30, o: [12, 12] }, "line"],
    ["path", { d: "m7.38 12 5.74-9.94" }, { r: "turn", a: 30, o: [12, 12] }, "line"],
    ["path", { d: "M9.69 16 3.95 6.06" }, { r: "turn", a: 30, o: [12, 12] }, "line"],
    ["path", { d: "M14.31 16H2.83" }, { r: "turn", a: 30, o: [12, 12] }, "line"],
    ["path", { d: "m16.62 12-5.74 9.94" }, { r: "turn", a: 30, o: [12, 12] }, "line"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
