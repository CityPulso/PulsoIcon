import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "brand-weibo" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BrandWeibo = createIcon("BrandWeibo", "brand-weibo", {
  nodes: [
    [
      "path",
      {
        d: "M19 14.127c0 3.073 -3.502 5.873 -8 5.873c-4.126 0 -8 -2.224 -8 -5.565c0 -1.78 .984 -3.737 2.7 -5.567c2.362 -2.51 5.193 -3.687 6.551 -2.238c.415 .44 .752 1.39 .749 2.062c2 -1.615 4.308 .387 3.5 2.693c1.26 .557 2.5 .538 2.5 2.742",
      },
      { r: "wobble", a: 5, o: [11, 13] },
    ],
    ["path", { d: "M15 4h1a5 5 0 0 1 5 5v1" }, { r: "draw", d: 0.1 }],
  ],
});
