import { icon } from "../icon.js";

// Adapted from Tabler Icons "pointer-exclamation" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PointerExclamation = icon("PointerExclamation", "pointer-exclamation", {
  nodes: [
    ["path", { d: "M15.97 13.414l-1.192 -1.192l3.113 -2.09a1.2 1.2 0 0 0 -.309 -2.228l-13.582 -3.904l3.904 13.563a1.2 1.2 0 0 0 2.228 .308l2.09 -3.093l2.778 2.778" }],
    ["path", { d: "M19 16v3" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M19 22v.01" }, { r: "pop", d: 0.3, o: [19, 22] }],
  ],
});
