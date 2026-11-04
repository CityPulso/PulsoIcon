import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "square-half-bottom" (MIT, Copyright (c) 2023 Phosphor Icons).

export const SquareHalfBottom = createIcon("SquareHalfBottom", "square-half-bottom", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M3 12h18" }],
    ["path", { d: "M7.5 12v9" }, { r: "grow", o: [7.5, 21] }],
    ["path", { d: "M12 12v9" }, { r: "grow", d: 0.07, o: [12, 21] }],
    ["path", { d: "M16.5 12v9" }, { r: "grow", d: 0.14, o: [16.5, 21] }],
  ],
});
