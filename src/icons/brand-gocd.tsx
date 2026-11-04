import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "gocd" (CC0-1.0). GoCD is a trademark of its owner.
export const BrandGocd = createIcon("BrandGocd", "brand-gocd", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M9.5 10.5V17l6.5-5-6.5-5" }, { r: "press", a: 0.15, o: [12, 12] }],
  ],
});
