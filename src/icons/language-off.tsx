import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "language-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const LanguageOff = createIcon("LanguageOff", "language-off", {
  nodes: [
    ["path", { d: "M12 20l2.463 -5.541m1.228 -2.764l.309 -.695l.8 1.8" }, { r: "pop", d: 0.1, o: [16, 16] }],
    ["path", { d: "M18 18h-5.1" }, { r: "pop", d: 0.1, o: [16, 16] }],
    ["path", { d: "M8.747 8.748c-.66 2.834 -2.536 4.252 -4.747 4.252" }, { r: "draw", d: 0 }],
    ["path", { d: "M4 6.371l2.371 0" }, { r: "draw", d: 0 }],
    ["path", { d: "M5 9c0 2.144 2.252 3.908 6 4" }, { r: "draw", d: 0 }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "m5 8 6 6", fill: "none" }, { r: "draw", d: 0 }],
    ["path", { d: "m4 14 6-6 2-3", fill: "none" }, { r: "draw", d: 0 }],
    ["path", { d: "M2 5h12", fill: "none" }, { r: "draw", d: 0 }],
    ["path", { d: "M7 2h1", fill: "none" }, { r: "draw", d: 0 }],
    ["path", { d: "m22 22-5-10-5 10", fill: "none" }, { r: "pop", d: 0.1, o: [16, 16] }],
    ["path", { d: "M14 18h6", fill: "none" }, { r: "pop", d: 0.1, o: [16, 16] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
