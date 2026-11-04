import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "openfaas" (CC0-1.0). OpenFaaS is a trademark of its owner.
export const BrandOpenfaas = createIcon("BrandOpenfaas", "brand-openfaas", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "3" }],
    ["path", { d: "M12 21v-4.5M6 11c1 3 3.5 5.5 6 5.5s5-2.5 6-5.5c-2.5 0-4.5 1.5-6 3.5-1.5-2-3.5-3.5-6-3.5" }, { r: "sway", a: 6, o: [12, 21] }],
    ["path", { d: "M7 6.5l3-1 1 3-3 1z" }, { r: "float", a: 1.5, d: 0.05, o: [9, 7.5] }],
    ["path", { d: "M13.5 5.5l3 .5-.5 3-3-.5z" }, { r: "float", a: 1.5, d: 0.15, o: [15, 7] }],
  ],
});
