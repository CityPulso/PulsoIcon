import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "freelancermap" (CC0-1.0). freelancermap is a trademark of its owner.
export const BrandFreelancermap = createIcon("BrandFreelancermap", "brand-freelancermap", {
  nodes: [
    ["path", { d: "M21.5 15A10 10 0 1 1 21.5 9" }, { r: "draw" }],
    ["circle", { cx: "12", cy: "12", r: "6" }, { r: "press", d: 0.05, a: 0.06, o: [12, 12] }],
    ["path", { d: "M10 6.3c2 3.5 2 7.9 0 11.4M6 12h12" }, { r: "spin", d: 0.1, a: 360, o: [12, 12] }],
  ],
});
