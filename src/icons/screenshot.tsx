import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "screenshot" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Screenshot = createIcon("Screenshot", "screenshot", {
  nodes: [
    ["path", { d: "M7 19a2 2 0 0 1 -2 -2" }, { r: "fade", d: 0.0 }],
    ["path", { d: "M5 13v-2" }, { r: "fade", d: 0.04 }],
    ["path", { d: "M5 7a2 2 0 0 1 2 -2" }, { r: "fade", d: 0.08 }],
    ["path", { d: "M11 5h2" }, { r: "fade", d: 0.12 }],
    ["path", { d: "M17 5a2 2 0 0 1 2 2" }, { r: "fade", d: 0.16 }],
    ["path", { d: "M19 11v2" }, { r: "fade", d: 0.2 }],
    ["path", { d: "M19 17v4" }, { r: "pop", d: 0.25, o: [19, 19] }],
    ["path", { d: "M21 19h-4" }, { r: "pop", d: 0.25, o: [19, 19] }],
    ["path", { d: "M13 19h-2" }, { r: "fade", d: 0.2 }],
  ],
});
