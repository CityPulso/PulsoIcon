import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "orcid" (CC0-1.0). ORCID is a trademark of its owner.
export const BrandOrcid = createIcon("BrandOrcid", "brand-orcid", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M8 10.5V17" }, { r: "draw", d: 0.05, o: [8, 14] }],
    ["path", { d: "M8 7.5h.01" }, { r: "pop", d: 0.3, o: [8, 7.5] }],
    ["path", { d: "M11 7v10h1.5a5 5 0 0 0 0-10z" }, { r: "draw", d: 0.15, o: [13.5, 12] }],
  ],
});
