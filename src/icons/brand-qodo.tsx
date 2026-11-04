import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "qodo" (CC0-1.0). Qodo is a trademark of its owner.
export const BrandQodo = createIcon("BrandQodo", "brand-qodo", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M6.5 10h11M7.5 10l.5 2.5h3l.5-2.5M12.5 10l.5 2.5h3l.5-2.5" }, { r: "drop", y: -1, a: 2 }],
    ["path", { d: "M9 16.5c2 1 4 1 6 0" }, { r: "draw", d: 0.2 }],
  ],
});
