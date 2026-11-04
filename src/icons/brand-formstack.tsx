import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "formstack" (CC0-1.0). Formstack is a trademark of its owner.
export const BrandFormstack = createIcon("BrandFormstack", "brand-formstack", {
  nodes: [
    ["rect", { x: "2.5", y: "3", width: "13.5", height: "18", rx: "1.5" }, { r: "press", a: 0.04, o: [9, 12] }],
    ["path", { d: "M6.5 17V7h5.5M6.5 13.5l5-2.5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M19 6v12" }, { r: "grow", d: 0.15, o: [19, 12] }],
    ["path", { d: "M22 8.5v7" }, { r: "grow", d: 0.25, o: [22, 12] }],
  ],
});
