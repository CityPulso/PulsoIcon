import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "circle-heart" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CircleHeart = createIcon("CircleHeart", "circle-heart", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }, { r: "press", d: 0, a: 0.05, o: [12, 12] }],
    [
      "path",
      {
        d: "M12 16l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.24 2.24 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.24 2.24 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296",
      },
      { r: "beat", d: 0.1, o: [12, 12.5] },
    ],
  ],
});
