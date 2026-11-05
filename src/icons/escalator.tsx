import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "escalator" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
// Solid from Tabler Icons "escalator" filled (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Escalator = createIcon("Escalator", "escalator", {
  nodes: [
    ["path", { d: "M19.5 5h-2.672a2 2 0 0 0 -1.414 .586l-8.414 8.414h-2.5a2.5 2.5 0 1 0 0 5h3.672a2 2 0 0 0 1.414 -.586l8.414 -8.414h1.5a2.5 2.5 0 0 0 0 -5" }, { r: "redraw" }],
  ],
  solid: [
    [
      "path",
      {
        d: "M19.5 4a3.5 3.5 0 0 1 0 7h-1.086l-8.12 8.121a3 3 0 0 1 -1.924 .872l-.198 .007h-3.672a3.5 3.5 0 0 1 0 -7h2.084l8.123 -8.121a3 3 0 0 1 1.923 -.872l.198 -.007z",
        stroke: "none",
      },
      { r: "redraw" },
    ],
  ],
});
