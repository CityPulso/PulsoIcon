import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "webdriverio" (CC0-1.0). WebdriverIO is a trademark of its owner.
export const BrandWebdriverio = createIcon("BrandWebdriverio", "brand-webdriverio", {
  nodes: [
    ["rect", { x: "2", y: "2", width: "20", height: "20", rx: "3" }],
    ["path", { d: "M6.5 8v8" }, { r: "draw" }],
    ["path", { d: "M8.5 16 11 8" }, { r: "draw", d: 0.1 }],
    ["circle", { cx: "15.5", cy: "12", r: "3.5" }, { r: "pop", d: 0.2, o: [15.5, 12] }],
  ],
});
