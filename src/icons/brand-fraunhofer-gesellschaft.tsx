import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "fraunhofergesellschaft" (CC0-1.0). Fraunhofer-Gesellschaft is a trademark of its owner.
export const BrandFraunhoferGesellschaft = createIcon("BrandFraunhoferGesellschaft", "brand-fraunhofer-gesellschaft", {
  nodes: [
    ["path", { d: "M3 7c6-.8 12-2.5 18-5" }, { r: "draw" }],
    ["path", { d: "M3 12c6-1.5 12-4 18-8" }, { r: "draw", d: 0.08 }],
    ["path", { d: "M3 17c6-2.5 12-6.5 18-11" }, { r: "draw", d: 0.16 }],
    ["path", { d: "M3 21.5c6-3 12-7.5 18-13" }, { r: "draw", d: 0.24 }],
    ["path", { d: "M10 21.5c4-2.5 8-5.5 11-8.5v8.5z" }, { r: "pop", d: 0.35, o: [17, 19] }],
  ],
});
