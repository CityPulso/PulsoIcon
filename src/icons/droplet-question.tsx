import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "droplet-question" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DropletQuestion = createIcon("DropletQuestion", "droplet-question", {
  nodes: [
    [
      "path",
      {
        d: "M18.064 10.877l-4.89 -7.26c-.42 -.625 -1.287 -.803 -1.936 -.397a1.376 1.376 0 0 0 -.41 .397l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546c2.203 1.782 5.259 2.056 7.723 .82",
      },
    ],
    ["path", { d: "M19 22v.01" }, { r: "pop", d: 0.35, o: [19, 22] }],
    ["path", { d: "M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" }, { r: "draw", d: 0.1 }],
  ],
});
