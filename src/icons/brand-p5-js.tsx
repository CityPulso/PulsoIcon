import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "p5dotjs" (CC0-1.0). p5.js is a trademark of its owner.
export const BrandP5Js = createIcon("BrandP5Js", "brand-p5-js", {
  nodes: [
    ["path", { d: "M2.5 20.5V9.5" }, { r: "draw", o: [2.5, 15] }],
    ["circle", { cx: "5.75", cy: "12.5", r: "3" }, { r: "draw", d: 0.1, o: [5.75, 12.5] }],
    ["path", { d: "M15 6.5h-4l-.5 4c.5-.3 1-.5 1.7-.5a3 3 0 1 1-2.2 5" }, { r: "draw", d: 0.2, o: [12.5, 12] }],
    ["path", { d: "M19.5 14v5.5M17.1 15.4l4.8 2.7M17.1 18.1l4.8-2.7" }, { r: "spin", d: 0.3, o: [19.5, 16.75] }],
  ],
});
