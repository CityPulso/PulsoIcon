import { icon } from "../icon.js";

// Adapted from Tabler Icons "square-rounded-number-4" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SquareRoundedNumber4 = icon("SquareRoundedNumber4", "square-rounded-number-4", {
  text: true,
  nodes: [
    ["path", { d: "M10 8v3a1 1 0 0 0 1 1h3" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M14 8v8" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
