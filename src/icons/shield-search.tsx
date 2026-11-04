import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "shield-search" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ShieldSearch = createIcon("ShieldSearch", "shield-search", {
  nodes: [
    ["path", { d: "M12 21a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3c.539 1.832 .627 3.747 .283 5.588" }],
    ["path", { d: "M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "tilt", o: [18, 18] }],
    ["path", { d: "M20.2 20.2l1.8 1.8" }, { r: "tilt", o: [18, 18] }],
  ],
});
