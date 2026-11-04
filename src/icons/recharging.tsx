import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "recharging" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Recharging = createIcon("Recharging", "recharging", {
  nodes: [
    ["path", { d: "M7.038 4.5a9 9 0 0 0 -2.495 2.47" }],
    ["path", { d: "M3.186 10.209a9 9 0 0 0 0 3.508" }],
    ["path", { d: "M4.5 16.962a9 9 0 0 0 2.47 2.495" }],
    ["path", { d: "M10.209 20.814a9 9 0 0 0 3.5 0" }],
    ["path", { d: "M16.962 19.5a9 9 0 0 0 2.495 -2.47" }],
    ["path", { d: "M20.814 13.791a9 9 0 0 0 0 -3.508" }],
    ["path", { d: "M19.5 7.038a9 9 0 0 0 -2.47 -2.495" }],
    ["path", { d: "M13.791 3.186a9 9 0 0 0 -3.508 -.02" }],
    ["path", { d: "M12 8l-2 4h4l-2 4" }, { r: "flicker", d: 0.3 }],
    ["path", { d: "M12 21a9 9 0 0 0 0 -18" }, { r: "draw" }],
  ],
});
