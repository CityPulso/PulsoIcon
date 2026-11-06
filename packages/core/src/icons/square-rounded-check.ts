import { icon } from "../icon.js";

// Adapted from Tabler Icons "square-rounded-check" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SquareRoundedCheck = icon("SquareRoundedCheck", "square-rounded-check", {
  nodes: [
    ["path", { d: "M9 12l2 2l4 -4" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" }, { r: "press", d: 0, a: 0.05, o: [12, 12] }],
  ],
});
