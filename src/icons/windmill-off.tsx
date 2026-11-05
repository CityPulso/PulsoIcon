import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "windmill-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
// Solid from Tabler Icons "windmill" filled (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const WindmillOff = createIcon("WindmillOff", "windmill-off", {
  nodes: [
    ["path", { d: "M15.061 11.06c1.18 -.824 1.939 -2.11 1.939 -3.56c0 -2.49 -2.24 -4.5 -5 -4.5v5" }, { r: "spin", o: [12, 12] }],
    ["path", { d: "M12 12c0 2.76 2.01 5 4.5 5c.166 0 .33 -.01 .49 -.03m2.624 -1.36c.856 -.91 1.386 -2.19 1.386 -3.61h-5" }, { r: "spin", o: [12, 12] }],
    ["path", { d: "M12 12c-2.76 0 -5 2.01 -5 4.5s2.24 4.5 5 4.5v-9" }, { r: "spin", o: [12, 12] }],
    ["path", { d: "M6.981 7.033c-2.244 .285 -3.981 2.402 -3.981 4.967h9" }, { r: "spin", o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
  solid: [
    [
      "path",
      {
        d: "M12 2c3.292 0 6 2.435 6 5.5c0 1.337 -.515 2.554 -1.369 3.5h4.369a1 1 0 0 1 1 1c0 3.292 -2.435 6 -5.5 6c-1.336 0 -2.553 -.515 -3.5 -1.368v4.368a1 1 0 0 1 -1 1c-3.292 0 -6 -2.435 -6 -5.5c0 -1.336 .515 -2.553 1.368 -3.5h-4.368a1 1 0 0 1 -1 -1c0 -3.292 2.435 -6 5.5 -6c1.337 0 2.554 .515 3.5 1.369v-4.369a1 1 0 0 1 1 -1z",
        stroke: "none",
      },
      { r: "spin", o: [12, 12] },
    ],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
