import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "puppet" (CC0-1.0). Puppet is a trademark of its owner.
export const BrandPuppet = createIcon("BrandPuppet", "brand-puppet", {
  nodes: [
    ["rect", { x: "4", y: "3", width: "5", height: "5" }, { r: "pop", o: [6.5, 5.5] }],
    ["rect", { x: "4", y: "16", width: "5", height: "5" }, { r: "pop", d: 0.1, o: [6.5, 18.5] }],
    ["rect", { x: "15", y: "9.5", width: "5", height: "5" }, { r: "pulse", d: 0.2, a: 0.15, o: [17.5, 12] }],
    ["path", { d: "M6.5 8v1.5L15 11M6.5 16v-1.5L15 13" }, { r: "draw", d: 0.15 }],
  ],
});
