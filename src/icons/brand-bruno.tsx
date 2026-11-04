import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "bruno" (CC0-1.0). Bruno is a trademark of its owner.
export const BrandBruno = createIcon("BrandBruno", "brand-bruno", {
  nodes: [
    ["path", { d: "M7.5 6c1.5-2 7.5-2 9 0" }],
    ["path", { d: "M7.5 6C5 5 2.5 7 3 11c.3 2 2 3 3.5 2" }, { r: "swing", a: 12, o: [7.5, 6] }],
    ["path", { d: "M16.5 6c2.5-1 5 1 4.5 5-.3 2-2 3-3.5 2" }, { r: "swing", d: 0.05, a: -12, o: [16.5, 6] }],
    ["path", { d: "M7 9v3c0 5 2.5 8 5 8s5-3 5-8V9" }],
    ["path", { d: "M11 14.5l1 1 1-1" }, { r: "pop", d: 0.2, o: [12, 15] }],
    ["path", { d: "M10 11h.01M14 11h.01" }, { r: "blink", d: 0.3, o: [12, 11] }],
  ],
});
