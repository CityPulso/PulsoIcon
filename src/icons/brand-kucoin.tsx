import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "kucoin" (CC0-1.0). KuCoin is a trademark of its owner.

export const BrandKucoin = createIcon("BrandKucoin", "brand-kucoin", {
  nodes: [
    ["path", { d: "M5 4v16" }, { r: "draw" }],
    ["path", { d: "M15 4.5l-7.5 7.5 7.5 7.5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M17.5 10l2 2-2 2-2-2z" }, { r: "spin", d: 0.2, a: 90, o: [17.5, 12] }],
  ],
});
