import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "tado" (CC0-1.0). tado° is a trademark of its owner.
export const BrandTado = createIcon("BrandTado", "brand-tado", {
  nodes: [
    ["path", { d: "M2.5 9v6a1.5 1.5 0 0 0 1.5 1.5M1.5 11.5h3" }, { r: "draw" }],
    ["path", { d: "M10 12v4.5M10 14.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0" }, { r: "draw", d: 0.08 }],
    ["path", { d: "M15.5 9v7.5M15.5 14.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0" }, { r: "draw", d: 0.16 }],
    ["circle", { cx: "19.5", cy: "14.5", r: "2" }, { r: "draw", d: 0.24 }],
    ["circle", { cx: "22", cy: "9.5", r: "1" }, { r: "pop", d: 0.35, o: [22, 9.5] }],
  ],
});
