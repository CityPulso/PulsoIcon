import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "pointer-code" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PointerCode = createIcon("PointerCode", "pointer-code", {
  nodes: [
    ["path", { d: "M15.76 13.203l-.982 -.981l3.113 -2.09a1.2 1.2 0 0 0 -.309 -2.228l-13.582 -3.904l3.904 13.563a1.2 1.2 0 0 0 2.228 .308l2.09 -3.093l.67 .67" }],
    ["path", { d: "M20 21l2 -2l-2 -2" }, { r: "slide", x: 1, a: 1.5 }],
    ["path", { d: "M17 17l-2 2l2 2" }, { r: "slide", x: -1, a: 1.5 }],
  ],
});
