import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "ionos" (CC0-1.0). Ionos is a trademark of its owner.
export const BrandIonos = createIcon("BrandIonos", "brand-ionos", {
  nodes: [
    ["path", { d: "M2 8.5v7" }, { r: "draw" }],
    ["ellipse", { cx: "6", cy: "12", rx: "1.75", ry: "3.5" }, { r: "draw", d: 0.08 }],
    ["path", { d: "M10.25 15.5v-7l3 7v-7" }, { r: "draw", d: 0.16 }],
    ["ellipse", { cx: "17", cy: "12", rx: "1.75", ry: "3.5" }, { r: "draw", d: 0.24 }],
    ["path", { d: "M22.25 9.5c-.3-.6-.8-1-1.4-1-.9 0-1.6.7-1.6 1.7 0 2.3 3.1 1.4 3.1 3.6 0 1-.7 1.7-1.6 1.7-.6 0-1.1-.4-1.5-1" }, { r: "draw", d: 0.32 }],
  ],
});
