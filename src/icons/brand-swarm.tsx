import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "swarm" (CC0-1.0). Swarm is a trademark of its owner.
export const BrandSwarm = createIcon("BrandSwarm", "brand-swarm", {
  nodes: [
    ["path", { d: "M2.77 6.96a4.5 2.5 20 1 0 8.46 3.08a4.5 2.5 20 1 0 -8.46 -3.08" }, { r: "flicker", o: [11, 10] }],
    ["path", { d: "M14.02 8.67a3.5 2 -65 1 0 2.96 -6.34a3.5 2 -65 1 0 -2.96 6.34" }, { r: "flicker", d: 0.05, o: [14, 9] }],
    ["circle", { cx: "15", cy: "15.5", r: "5.5" }, { r: "float", d: 0.1, a: 1 }],
    ["path", { d: "M15.5 10.5 10.5 15.5M19 13l-6.5 7" }, { r: "float", d: 0.1, a: 1 }],
  ],
});
