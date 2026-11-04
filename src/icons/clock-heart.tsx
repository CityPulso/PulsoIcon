import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "clock-heart" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ClockHeart = createIcon("ClockHeart", "clock-heart", {
  nodes: [
    ["path", { d: "M20.956 11.107a9 9 0 1 0 -9.579 9.871" }],
    [
      "path",
      {
        d: "M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296",
      },
      { r: "beat", o: [18, 18.5] },
    ],
    ["path", { d: "M12 7v5l.5 .5" }, { r: "spin", a: 360, o: [12, 12] }],
  ],
});
