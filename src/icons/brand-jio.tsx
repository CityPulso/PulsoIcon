import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "jio" (CC0-1.0). Jio is a trademark of its owner.
export const BrandJio = createIcon("BrandJio", "brand-jio", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M8.5 8.5v6a2 2 0 0 1-3.5 1.3" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M11.5 12v4 M11.5 8.5h.01" }, { r: "draw", d: 0.15 }],
    ["circle", { cx: "15.75", cy: "14", r: "2" }, { r: "draw", d: 0.25 }],
  ],
});
