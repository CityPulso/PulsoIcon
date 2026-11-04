import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "mickey" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Mickey = createIcon("Mickey", "mickey", {
  nodes: [
    ["path", { d: "M5.5 3a3.5 3.5 0 0 1 3.25 4.8a7.017 7.017 0 0 0 -2.424 2.1a3.5 3.5 0 1 1 -.826 -6.9" }, { r: "wobble", d: 0.1, o: [5.5, 6.5] }],
    ["path", { d: "M18.5 3a3.5 3.5 0 1 1 -.826 6.902a7.013 7.013 0 0 0 -2.424 -2.103a3.5 3.5 0 0 1 3.25 -4.799" }, { r: "wobble", d: 0.1, a: -8, o: [18.5, 6.5] }],
    ["path", { d: "M5 14a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" }, { r: "jelly", o: [12, 21] }],
  ],
});
