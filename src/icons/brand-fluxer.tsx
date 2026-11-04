import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "fluxer" (CC0-1.0). Fluxer is a trademark of its owner.
export const BrandFluxer = createIcon("BrandFluxer", "brand-fluxer", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.03, o: [12, 12] }],
    ["path", { d: "M7 10c1.5-1.5 3.5-1.5 5 0s3.5 1.5 5 0" }, { r: "slide", d: 0.05, x: 1 }],
    ["path", { d: "M7 14.5c1.5-1.5 3.5-1.5 5 0s3.5 1.5 5 0" }, { r: "slide", d: 0.15, x: -1 }],
  ],
});
