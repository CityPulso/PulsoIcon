import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "boehringeringelheim" (CC0-1.0). Boehringer Ingelheim is a trademark of its owner.
export const BrandBoehringerIngelheim = createIcon("BrandBoehringerIngelheim", "brand-boehringer-ingelheim", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M8.5 8.5L12 5.5l3.5 3" }, { r: "pop", d: 0.3, o: [12, 7] }],
    ["path", { d: "M9 10.5v9" }, { r: "grow", d: 0.05, o: [9, 19.5] }],
    ["path", { d: "M12 10.5v9" }, { r: "grow", d: 0.1, o: [12, 19.5] }],
    ["path", { d: "M15 10.5v9" }, { r: "grow", d: 0.15, o: [15, 19.5] }],
    ["path", { d: "M6 13.5v5" }, { r: "grow", o: [6, 18.5] }],
    ["path", { d: "M18 13.5v5" }, { r: "grow", d: 0.2, o: [18, 18.5] }],
  ],
});
