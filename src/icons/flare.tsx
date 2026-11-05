import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "flare" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
// Solid from Tabler Icons "flare" filled (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Flare = createIcon("Flare", "flare", {
  nodes: [["path", { d: "M12 3l3 6l6 3l-6 3l-3 6l-3 -6l-6 -3l6 -3l3 -6" }, { r: "twinkle", o: [12, 12] }]],
  solid: [
    [
      "path",
      {
        d: "M11.106 2.553a1 1 0 0 1 1.788 0l2.851 5.701l5.702 2.852a1 1 0 0 1 .11 1.725l-.11 .063l-5.702 2.851l-2.85 5.702a1 1 0 0 1 -1.726 .11l-.063 -.11l-2.852 -5.702l-5.701 -2.85a1 1 0 0 1 -.11 -1.726l.11 -.063l5.701 -2.852z",
        stroke: "none",
      },
      { r: "twinkle", o: [12, 12] },
    ],
  ],
});
