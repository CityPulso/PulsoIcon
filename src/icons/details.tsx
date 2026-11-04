import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "details" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Details = createIcon("Details", "details", {
  nodes: [
    ["path", { d: "M11.999 3l.001 17" }, { r: "draw", d: 0.1 }],
    [
      "path",
      { d: "M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0" },
      { r: "pulse", a: 0.06, o: [12, 12] },
    ],
  ],
});
