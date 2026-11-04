import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "phpstorm" (CC0-1.0). PhpStorm is a trademark of its owner.

export const BrandPhpstorm = createIcon("BrandPhpstorm", "brand-phpstorm", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }],
    ["path", { d: "M7 15V7h2.5a2 2 0 0 1 0 4H7" }, { r: "draw" }],
    ["path", { d: "M17 7.5h-2.25a1.75 1.75 0 0 0 0 3.5h.5a1.75 1.75 0 0 1 0 3.5H12.5" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M7 18h5" }, { r: "flicker", d: 0.3 }],
  ],
});
