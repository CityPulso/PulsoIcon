import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "cloud-exclamation" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CloudExclamation = createIcon("CloudExclamation", "cloud-exclamation", {
  nodes: [
    [
      "path",
      {
        d: "M15 18.004h-8.343c-2.572 -.004 -4.657 -2.011 -4.657 -4.487c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.374 0 2.562 .805 3.121 1.972",
      },
    ],
    ["path", { d: "M19 16v3" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M19 22v.01" }, { r: "pop", d: 0.3, o: [19, 22] }],
  ],
});
