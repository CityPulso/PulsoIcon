import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "tradingview" (CC0-1.0). TradingView is a trademark of its owner.

export const BrandTradingview = createIcon("BrandTradingview", "brand-tradingview", {
  nodes: [
    ["path", { d: "M3 7h7v10H7v-7H3z" }, { r: "grow", o: [6, 17] }],
    ["circle", { cx: "13.5", cy: "9", r: "1.5" }, { r: "pop", d: 0.1, o: [13.5, 9] }],
    ["path", { d: "M17 7h4l-5 10h-4z" }, { r: "slide", d: 0.15, x: 0.5, y: -1, a: 1.5 }],
  ],
});
