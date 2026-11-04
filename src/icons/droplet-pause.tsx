import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "droplet-pause" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DropletPause = createIcon("DropletPause", "droplet-pause", {
  nodes: [
    [
      "path",
      {
        d: "M18.952 13.456a6.573 6.573 0 0 0 -.888 -2.579l-4.89 -7.26c-.42 -.625 -1.287 -.803 -1.936 -.397a1.376 1.376 0 0 0 -.41 .397l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546a7.176 7.176 0 0 0 5.517 1.507",
      },
    ],
    ["path", { d: "M17 17v5" }, { r: "press", d: 0.1, o: [19, 19.5] }],
    ["path", { d: "M21 17v5" }, { r: "press", d: 0.1, o: [19, 19.5] }],
  ],
});
