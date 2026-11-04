import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "brand-git" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BrandGit = createIcon("BrandGit", "brand-git", {
  nodes: [
    ["path", { d: "M15 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, { r: "pop", d: 0.2, o: [16, 12] }],
    ["path", { d: "M11 8a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, { r: "pop", d: 0.1, o: [12, 8] }],
    ["path", { d: "M11 16a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, { r: "pop", d: 0.15, o: [12, 16] }],
    ["path", { d: "M12 15v-6" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M15 11l-2 -2" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M11 7l-1.9 -1.9" }, { r: "draw", d: 0.1 }],
    [
      "path",
      {
        d: "M13.446 2.6l7.955 7.954a2.045 2.045 0 0 1 0 2.892l-7.955 7.955a2.045 2.045 0 0 1 -2.892 0l-7.955 -7.955a2.045 2.045 0 0 1 0 -2.892l7.955 -7.955a2.045 2.045 0 0 1 2.892 0",
      },
      { r: "turn", a: 45, o: [12, 12] },
    ],
  ],
});
