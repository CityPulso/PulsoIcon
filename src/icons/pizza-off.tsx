import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "pizza-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PizzaOff = createIcon("PizzaOff", "pizza-off", {
  nodes: [
    [
      "path",
      { d: "M10.313 6.277l1.687 -3.277l5.34 10.376m2.477 6.463a19.093 19.093 0 0 1 -7.817 1.661c-3.04 0 -5.952 -.714 -8.5 -1.983l5.434 -10.559" },
      { r: "wobble", a: 5, o: [12, 12] },
    ],
    ["path", { d: "M5.38 15.866a14.94 14.94 0 0 0 6.815 1.634c1.56 0 3.105 -.24 4.582 -.713" }, { r: "wobble", a: 5, o: [12, 12] }],
    ["path", { d: "M11 14v-.01" }, { r: "pop", d: 0.2, o: [11, 14] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
});
