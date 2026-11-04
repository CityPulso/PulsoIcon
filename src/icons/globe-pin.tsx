import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "world-pin" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const GlobePin = createIcon("GlobePin", "globe-pin", {
  nodes: [
    ["path", { d: "M20.972 11.291a9 9 0 1 0 -8.322 9.686" }],
    ["path", { d: "M3.6 9h16.8" }],
    ["path", { d: "M3.6 15h8.9" }],
    ["path", { d: "M11.5 3a17 17 0 0 0 0 18" }],
    ["path", { d: "M12.5 3a16.986 16.986 0 0 1 2.578 9.018" }],
    [
      "path",
      { d: "M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879" },
      { r: "bounce", d: 0.1, x: 0, y: -1, a: 2, o: [19, 19] },
    ],
    ["path", { d: "M19 18v.01" }, { r: "bounce", d: 0.1, x: 0, y: -1, a: 2, o: [19, 19] }],
  ],
});
