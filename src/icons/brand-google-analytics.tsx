import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "brand-google-analytics" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BrandGoogleAnalytics = createIcon("BrandGoogleAnalytics", "brand-google-analytics", {
  nodes: [
    [
      "path",
      { d: "M10 10.105a1.105 1.105 0 0 1 1.105 -1.105h1.79a1.105 1.105 0 0 1 1.105 1.105v9.79a1.105 1.105 0 0 1 -1.105 1.105h-1.79a1.105 1.105 0 0 1 -1.105 -1.105l0 -9.79" },
      { r: "grow", d: 0.1, o: [12, 21] },
    ],
    [
      "path",
      { d: "M17 4.105a1.105 1.105 0 0 1 1.105 -1.105h1.79a1.105 1.105 0 0 1 1.105 1.105v15.79a1.105 1.105 0 0 1 -1.105 1.105h-1.79a1.105 1.105 0 0 1 -1.105 -1.105l0 -15.79" },
      { r: "grow", d: 0.2, o: [19, 21] },
    ],
    ["path", { d: "M3 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", o: [5, 19] }],
  ],
});
