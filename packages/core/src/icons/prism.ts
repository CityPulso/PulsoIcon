import { icon } from "../icon.js";

// Adapted from Tabler Icons "prism" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Prism = icon("Prism", "prism", {
  nodes: [
    ["path", { d: "M12 9v13" }, { r: "draw", d: 0.15 }],
    [
      "path",
      { d: "M19 17.17l-5.98 4.485a1.7 1.7 0 0 1 -2.04 0l-5.98 -4.485a2.5 2.5 0 0 1 -1 -2v-11.17a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v11.17a2.5 2.5 0 0 1 -1 2" },
      { r: "press", d: 0, a: 0.05, o: [12, 12] },
    ],
    ["path", { d: "M4.3 3.3l6.655 5.186a1.7 1.7 0 0 0 2.09 0l6.655 -5.186" }, { r: "press", d: 0, a: 0.05, o: [12, 12] }],
  ],
});
