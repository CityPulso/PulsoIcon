import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "cbc" (CC0-1.0). CBC is a trademark of its owner.
export const BrandCbc = createIcon("BrandCbc", "brand-cbc", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "2.5" }, { r: "pop", o: [12, 12] }],
    ["path", { d: "M9 7.5a3 3 0 0 1 6 0z" }, { r: "pop", d: 0.1, o: [12, 7.5] }],
    ["path", { d: "M16.5 9a3 3 0 0 1 0 6z" }, { r: "pop", d: 0.15, o: [16.5, 12] }],
    ["path", { d: "M15 16.5a3 3 0 0 1-6 0z" }, { r: "pop", d: 0.2, o: [12, 16.5] }],
    ["path", { d: "M7.5 15a3 3 0 0 1 0-6z" }, { r: "pop", d: 0.25, o: [7.5, 12] }],
    ["path", { d: "M5.5 5.5h.01M18.5 5.5h.01M5.5 18.5h.01M18.5 18.5h.01" }, { r: "pop", d: 0.35, o: [12, 12] }],
  ],
});
