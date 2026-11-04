import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "teal" (CC0-1.0). Teal is a trademark of its owner.
export const BrandTeal = createIcon("BrandTeal", "brand-teal", {
  nodes: [
    ["path", { d: "M13 20H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v5" }, { r: "press", a: 0.04, o: [10, 12] }],
    ["path", { d: "M13 20h8.5l-2.5-3.5 2.5-3.5H17" }, { r: "sway", d: 0.1, a: 6, o: [13, 20] }],
    ["circle", { cx: "10", cy: "11.5", r: "2" }, { r: "pop", d: 0.15, o: [10, 11.5] }],
  ],
});
