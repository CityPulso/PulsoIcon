import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "flag-pin" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FlagPin = createIcon("FlagPin", "flag-pin", {
  nodes: [
    ["path", { d: "M12.857 14.675a5.016 5.016 0 0 1 -.857 -.675a5 5 0 0 0 -7 0v-9a5 5 0 0 1 7 0a5 5 0 0 0 7 0v6" }, { r: "swing", a: 4, o: [5, 9.5] }],
    ["path", { d: "M5 21v-7" }],
    [
      "path",
      { d: "M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879" },
      { r: "bounce", d: 0.1, x: 0, y: -1, a: 2, o: [19, 19] },
    ],
    ["path", { d: "M19 18v.01" }, { r: "bounce", d: 0.1, x: 0, y: -1, a: 2, o: [19, 19] }],
  ],
});
