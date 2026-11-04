import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "citroen" (CC0-1.0). Citroën is a trademark of its owner.

export const BrandCitroen = createIcon("BrandCitroen", "brand-citroen", {
  nodes: [
    ["ellipse", { cx: "12", cy: "12", rx: "8.5", ry: "10" }],
    ["path", { d: "M7 12l5-3.5 5 3.5" }, { r: "slide", x: 0, y: -1, a: 1.5 }],
    ["path", { d: "M7 16l5-3.5 5 3.5" }, { r: "slide", x: 0, y: -1, a: 1.5, d: 0.08 }],
  ],
});
