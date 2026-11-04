import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "dtube" (CC0-1.0). DTube is a trademark of its owner.
export const BrandDtube = createIcon("BrandDtube", "brand-dtube", {
  nodes: [
    ["path", { d: "M3 3h6.5a8 8 0 0 1 0 16H3z" }],
    ["path", { d: "M8 8l5 3-5 3z" }, { r: "press", a: 0.15, o: [10, 11] }],
    ["circle", { cx: "20", cy: "19", r: "1.5" }, { r: "pop", d: 0.2, o: [20, 19] }],
  ],
});
