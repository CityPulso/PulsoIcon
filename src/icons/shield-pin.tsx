import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "shield-pin" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ShieldPin = createIcon("ShieldPin", "shield-pin", {
  nodes: [
    ["path", { d: "M12.597 20.829a12 12 0 0 1 -.597 .171a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3c.506 1.72 .614 3.512 .342 5.248" }],
    ["path", { d: "M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879" }, { r: "bounce", y: -1, a: 2, o: [19, 19] }],
    ["path", { d: "M19 18v.01" }, { r: "bounce", y: -1, a: 2, o: [19, 19] }],
  ],
});
