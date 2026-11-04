import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "zenbrowser" (CC0-1.0). Zen Browser is a trademark of its owner.

export const BrandZenBrowser = createIcon("BrandZenBrowser", "brand-zen-browser", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "pulse", o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "6.5" }, { r: "pulse", d: 0.1, o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "3" }, { r: "pulse", d: 0.2, o: [12, 12] }],
  ],
});
