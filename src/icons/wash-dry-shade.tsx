import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "wash-dry-shade" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const WashDryShade = createIcon("WashDryShade", "wash-dry-shade", {
  nodes: [
    ["path", { d: "M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12" }],
    ["path", { d: "M3 11l8 -8" }, { r: "draw" }],
    ["path", { d: "M3 17l14 -14" }, { r: "draw", d: 0.15 }],
  ],
});
