import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "piwigo" (CC0-1.0). Piwigo is a trademark of its owner.

export const BrandPiwigo = createIcon("BrandPiwigo", "brand-piwigo", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "5" }],
    ["circle", { cx: "12", cy: "13", r: "4.5" }, { r: "press", a: 0.15, o: [12, 13] }],
    ["path", { d: "M17 6.5h.01" }, { r: "flicker", d: 0.2 }],
  ],
});
