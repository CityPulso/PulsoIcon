import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "shopping-bag-open" (MIT, Copyright (c) 2023 Phosphor Icons).
export const ShoppingBagOpen = createIcon("ShoppingBagOpen", "shopping-bag-open", {
  nodes: [
    ["rect", { x: "3", y: "4", width: "18", height: "16", rx: "2" }, { r: "press", a: 0.06, o: [12, 20] }],
    ["path", { d: "M3 8h18" }, { r: "lift", y: -1, a: 0, o: [12, 8] }],
    ["path", { d: "M16 12a4 4 0 0 1-8 0" }, { r: "draw", d: 0.15, o: [12, 14] }],
  ],
});
