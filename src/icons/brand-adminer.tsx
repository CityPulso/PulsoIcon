import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "adminer" (CC0-1.0). Adminer is a trademark of its owner.
export const BrandAdminer = createIcon("BrandAdminer", "brand-adminer", {
  nodes: [
    ["ellipse", { cx: "8.5", cy: "7", rx: "6", ry: "2.5" }],
    ["path", { d: "M2.5 7v11a6 2.5 0 0 0 12 0V7" }],
    ["path", { d: "M2.5 11a6 2.5 0 0 0 12 0 M2.5 14.5a6 2.5 0 0 0 12 0" }],
    ["path", { d: "M17.5 4.5a2 2 0 1 1 2.8 1.8c-.5.3-.8.7-.8 1.2" }, { r: "wobble", a: 12, o: [19.5, 7] }],
    ["path", { d: "M19.5 10.5h.01" }, { r: "pop", d: 0.15, o: [19.5, 10.5] }],
  ],
});
