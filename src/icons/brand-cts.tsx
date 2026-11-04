import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "cts" (CC0-1.0). CTS is a trademark of its owner.
export const BrandCts = createIcon("BrandCts", "brand-cts", {
  nodes: [
    ["path", { d: "M7.5 11a3 3 0 1 0 0 5" }, { r: "draw" }],
    ["path", { d: "M9.5 7h6M12.5 7v9.5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M21 10.5h-3a1.5 1.5 0 0 0 0 3h1.5a1.5 1.5 0 0 1 0 3H16.5" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M18.5 19 17.5 21" }, { r: "pop", d: 0.35, o: [18, 20] }],
  ],
});
