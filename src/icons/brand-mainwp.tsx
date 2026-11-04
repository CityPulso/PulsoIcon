import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "mainwp" (CC0-1.0). MainWP is a trademark of its owner.
export const BrandMainwp = createIcon("BrandMainwp", "brand-mainwp", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.03, o: [12, 12] }],
    ["circle", { cx: "12", cy: "6.5", r: "1.5" }],
    ["path", { d: "M11 9.5l-2 6.5 3 3 3-3-2-6.5z" }, { r: "swing", d: 0.1, a: 10, o: [12, 9.5] }],
  ],
});
