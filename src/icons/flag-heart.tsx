import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "flag-heart" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FlagHeart = createIcon("FlagHeart", "flag-heart", {
  nodes: [
    ["path", { d: "M11.33 13.447a5.001 5.001 0 0 0 -6.33 .553v-9a5 5 0 0 1 7 0a5 5 0 0 0 7 0v6" }, { r: "swing", a: 4, o: [5, 9.5] }],
    ["path", { d: "M5 21v-7" }],
    [
      "path",
      {
        d: "M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296",
      },
      { r: "beat", d: 0.1, o: [18, 18.5] },
    ],
  ],
});
