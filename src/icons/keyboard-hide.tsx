import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "keyboard-hide" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const KeyboardHide = createIcon("KeyboardHide", "keyboard-hide", {
  nodes: [
    ["path", { d: "M2 5a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2l0 -8" }],
    ["path", { d: "M6 7l0 .01" }, { r: "fade", d: 0.05 }],
    ["path", { d: "M10 7l0 .01" }, { r: "fade", d: 0.1 }],
    ["path", { d: "M14 7l0 .01" }, { r: "fade", d: 0.15 }],
    ["path", { d: "M18 7l0 .01" }, { r: "fade", d: 0.2 }],
    ["path", { d: "M6 11l0 .01" }, { r: "fade", d: 0.25 }],
    ["path", { d: "M18 11l0 .01" }, { r: "fade", d: 0.35 }],
    ["path", { d: "M10 11l4 0" }, { r: "fade", d: 0.3 }],
    ["path", { d: "M10 21l2 -2l2 2" }, { r: "bounce", y: -1, a: 1.5 }],
  ],
});
