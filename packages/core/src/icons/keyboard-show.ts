import { icon } from "../icon.js";

// Adapted from Tabler Icons "keyboard-show" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const KeyboardShow = icon("KeyboardShow", "keyboard-show", {
  nodes: [
    ["path", { d: "M2 5a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2l0 -8" }],
    ["path", { d: "M6 7l0 .01" }, { r: "pop", d: 0.05, o: [6, 7] }],
    ["path", { d: "M10 7l0 .01" }, { r: "pop", d: 0.1, o: [10, 7] }],
    ["path", { d: "M14 7l0 .01" }, { r: "pop", d: 0.15, o: [14, 7] }],
    ["path", { d: "M18 7l0 .01" }, { r: "pop", d: 0.2, o: [18, 7] }],
    ["path", { d: "M6 11l0 .01" }, { r: "pop", d: 0.25, o: [6, 11] }],
    ["path", { d: "M18 11l0 .01" }, { r: "pop", d: 0.35, o: [18, 11] }],
    ["path", { d: "M10 11l4 0" }, { r: "pop", d: 0.3, o: [12, 11] }],
    ["path", { d: "M10 19l2 2l2 -2" }, { r: "bounce", y: 1, a: 1.5 }],
  ],
});
