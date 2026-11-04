import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "resize" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Resize = createIcon("Resize", "resize", {
  nodes: [
    ["path", { d: "M4 11v8a1 1 0 0 0 1 1h8m-9 -14v-1a1 1 0 0 1 1 -1h1m5 0h2m5 0h1a1 1 0 0 1 1 1v1m0 5v2m0 5v1a1 1 0 0 1 -1 1h-1" }, { r: "fade", d: 0.1 }],
    ["path", { d: "M4 12h7a1 1 0 0 1 1 1v7" }, { r: "slide", x: 1, y: -1, a: 2 }],
  ],
});
