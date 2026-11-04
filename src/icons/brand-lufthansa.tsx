import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "lufthansa" (CC0-1.0). Lufthansa is a trademark of its owner.
export const BrandLufthansa = createIcon("BrandLufthansa", "brand-lufthansa", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.03, o: [12, 12] }],
    ["path", { d: "M4.5 10l3.5.5 2 1.5 6 4.5 3 1.5" }, { r: "float", a: 1 }],
    ["path", { d: "M10.5 12c2-2 4.5-3.5 8-4M12.5 13.5c2.5-1.5 4.5-2 7.5-2" }, { r: "float", d: 0.05, a: 1.5 }],
  ],
});
