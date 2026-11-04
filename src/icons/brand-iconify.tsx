import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "iconify" (MIT). Iconify is a trademark of its owner.

export const BrandIconify = createIcon("BrandIconify", "brand-iconify", {
  nodes: [
    ["path", { d: "M2.5 10.5 12 3l9.5 7.5" }, { r: "lift", y: -1, a: 0, o: [12, 6] }],
    ["path", { d: "M5 11v10h14V11" }, { r: "press", a: 0.05, o: [12, 21] }],
    ["path", { d: "M9.5 10.5h.01M9.5 13.5V17" }, { r: "pop", d: 0.15, o: [9.5, 14] }],
    ["path", { d: "M14.5 10.5h.01M14.5 13.5V16a2 2 0 0 1-2 2" }, { r: "pop", d: 0.22, o: [14, 14] }],
  ],
});
