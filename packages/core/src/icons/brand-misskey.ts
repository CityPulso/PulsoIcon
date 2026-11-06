import { icon } from "../icon.js";

// Adapted from Tabler Icons "brand-misskey" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BrandMisskey = icon("BrandMisskey", "brand-misskey", {
  nodes: [
    [
      "path",
      {
        d: "M3 7.212c0 -1.27 1.6 -1.54 2.2 -.82l3.8 3.35l3.8 -3.35c.6 -.72 2.2 -.45 2.2 .82v9.288a1.5 1.5 0 0 1 -3 0v-5.258l-.95 .95a2.9 2.9 0 0 1 -4.1 0l-.95 -.95v5.258a1.5 1.5 0 0 1 -3 0v-9.288",
      },
      { r: "press", o: [9, 13] },
    ],
    ["path", { d: "M19.5 9a1.5 1.5 0 1 0 0 -3a1.5 1.5 0 0 0 0 3" }, { r: "bounce", d: 0.1, y: -1, a: 1.5 }],
    ["path", { d: "M18 13.5a1.5 1.5 0 0 1 3 0v3a1.5 1.5 0 0 1 -3 0v-3" }, { r: "pop", d: 0.2, o: [19.5, 15] }],
  ],
});
