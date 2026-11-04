import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "aeroflot" (CC0-1.0). Aeroflot is a trademark of its owner.
export const BrandAeroflot = createIcon("BrandAeroflot", "brand-aeroflot", {
  nodes: [
    ["circle", { cx: "12", cy: "11.5", r: "2.5" }, { r: "pop", o: [12, 11.5] }],
    ["path", { d: "M8.5 10H2 M9 12.5H3.5 M9.5 15H5" }, { r: "float", d: 0.08, a: 1.5 }],
    ["path", { d: "M15.5 10H22 M15 12.5h5.5 M14.5 15H19" }, { r: "float", d: 0.08, a: 1.5 }],
  ],
});
