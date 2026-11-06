import { icon } from "../icon.js";

// Adapted from Tabler Icons "discount-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DiscountOff = icon("DiscountOff", "discount-off", {
  nodes: [
    ["path", { d: "M9 15l3 -3m2 -2l1 -1" }, { r: "draw", d: 0.1, o: [12, 12] }],
    ["path", { d: "M9.148 9.145a.498 .498 0 0 0 .352 .855a.5 .5 0 0 0 .35 -.142" }, { r: "pop", d: 0.2, o: [9.5, 9.5] }],
    ["path", { d: "M14.148 14.145a.498 .498 0 0 0 .352 .855a.5 .5 0 0 0 .35 -.142" }, { r: "pop", d: 0.3, o: [14.5, 14.5] }],
    ["path", { d: "M5.641 5.631a9 9 0 1 0 12.719 12.738m1.68 -2.318a9 9 0 0 0 -12.074 -12.098" }, { r: "wobble", a: 4, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
  solid: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "wobble", a: 4, o: [12, 12] }],
    ["path", { d: "m15 9-6 6" }, { r: "draw", d: 0.1, o: [12, 12] }, "line"],
    ["path", { d: "M9 9h.01" }, { r: "pop", d: 0.2, o: [9.5, 9.5] }, "line"],
    ["path", { d: "M15 15h.01" }, { r: "pop", d: 0.3, o: [14.5, 14.5] }, "line"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
