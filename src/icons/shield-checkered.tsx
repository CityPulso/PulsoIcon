import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "shield-checkered" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ShieldCheckered = createIcon("ShieldCheckered", "shield-checkered", {
  nodes: [
    ["path", { d: "M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" }],
    ["path", { d: "M12 3v18" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M3.5 12h17" }, { r: "draw", d: 0.2 }],
  ],
});
