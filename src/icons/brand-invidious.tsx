import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "invidious" (CC0-1.0). Invidious is a trademark of its owner.
export const BrandInvidious = createIcon("BrandInvidious", "brand-invidious", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M8.5 17L12 9.5l3.5 7.5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M12 6.5h.01" }, { r: "bounce", d: 0.2, y: -1, a: 1.5 }],
  ],
});
