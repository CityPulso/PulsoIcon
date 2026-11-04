import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "pdq" (CC0-1.0). PDQ is a trademark of its owner.
export const BrandPdq = createIcon("BrandPdq", "brand-pdq", {
  nodes: [
    ["path", { d: "M2.5 16V8h2a2.25 2.25 0 0 1 0 4.5h-2" }, { r: "draw", o: [4.5, 12] }],
    ["path", { d: "M8.5 8v8h.5a4 4 0 0 0 0-8z" }, { r: "draw", d: 0.1, o: [11, 12] }],
    ["ellipse", { cx: "18.5", cy: "12", rx: "3", ry: "4" }, { r: "draw", d: 0.2, o: [18.5, 12] }],
    ["path", { d: "M19.5 15l2.5 2.5" }, { r: "pop", d: 0.35, o: [20.5, 16] }],
  ],
});
