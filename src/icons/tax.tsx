import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "tax" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Tax = createIcon("Tax", "tax", {
  nodes: [
    [
      "path",
      { d: "M8.487 21h7.026a4 4 0 0 0 3.808 -5.224l-1.706 -5.306a5 5 0 0 0 -4.76 -3.47h-1.71a5 5 0 0 0 -4.76 3.47l-1.706 5.306a4 4 0 0 0 3.808 5.224" },
      { r: "swing", a: 5, o: [12, 7] },
    ],
    ["path", { d: "M15 3q -1 4 -3 4t -3 -4l6 0" }, { r: "swing", a: 5, o: [12, 7] }],
    ["path", { d: "M14 11h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M12 10v1" }, { r: "pop", d: 0.35, o: [12, 10.5] }],
    ["path", { d: "M12 17v1" }, { r: "pop", d: 0.35, o: [12, 17.5] }],
  ],
});
