import { icon } from "../icon.js";

// Drawn after Phosphor Icons "compass-rose" (MIT, Copyright (c) 2023 Phosphor Icons).
export const CompassRose = icon("CompassRose", "compass-rose", {
  nodes: [
    [
      "path",
      { d: "M14.16 5.34A7 7 0 0 1 18.66 9.84M18.66 14.16A7 7 0 0 1 14.16 18.66M9.84 18.66A7 7 0 0 1 5.34 14.16M5.34 9.84A7 7 0 0 1 9.84 5.34" },
      { r: "press", a: 0.04, o: [12, 12] },
    ],
    ["path", { d: "M12 2l2 8 8 2-8 2-2 8-2-8-8-2 8-2z" }, { r: "turn", d: 0.1, a: 20, o: [12, 12] }],
  ],
});
