import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "license-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const LicenseOff = createIcon("LicenseOff", "license-off", {
  nodes: [
    [
      "path",
      { d: "M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 1 0 4 0v-2m0 -4v-8a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -.864 .126m-2.014 2.025a3 3 0 0 0 -.122 .849v11" },
      { r: "wobble", a: 4, o: [12, 12] },
    ],
    ["path", { d: "M11 7h2" }, { r: "draw", d: 0.2, o: [12, 12] }],
    ["path", { d: "M9 11h2" }, { r: "draw", d: 0.3, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
});
