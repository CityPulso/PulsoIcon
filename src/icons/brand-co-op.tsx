import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "coop" (CC0-1.0). Co-op is a trademark of its owner.
export const BrandCoOp = createIcon("BrandCoOp", "brand-co-op", {
  nodes: [
    ["path", { d: "M10 4.7a3.25 3.25 0 1 0 0 4.6" }, { r: "pop", o: [7.5, 7] }],
    ["circle", { cx: "16.5", cy: "7", r: "3.25" }, { r: "pop", d: 0.08, o: [16.5, 7] }],
    ["circle", { cx: "7.5", cy: "16", r: "3.25" }, { r: "pop", d: 0.16, o: [7.5, 16] }],
    ["path", { d: "M13.25 21.5V16a3.25 3.25 0 1 1 3.25 3.25" }, { r: "pop", d: 0.24, o: [16.5, 16] }],
  ],
});
