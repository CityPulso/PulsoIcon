import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "datadog" (CC0-1.0). Datadog is a trademark of its owner.
export const BrandDatadog = createIcon("BrandDatadog", "brand-datadog", {
  nodes: [
    ["path", { d: "M5.5 6.5 3.5 3l4 .5" }, { r: "swing", d: 0.1, a: 15, o: [6, 5] }],
    ["circle", { cx: "9.5", cy: "9.5", r: "5.5" }, { r: "tilt", a: 8, o: [9.5, 15] }],
    ["path", { d: "M8 9h.01M11.5 9h.01M10 12h.01" }, { r: "tilt", a: 8, o: [9.5, 15] }],
    ["rect", { x: "14", y: "14.5", width: "7.5", height: "6.5" }, { r: "press", a: 0.05, o: [17.75, 17.75] }],
    ["path", { d: "M15.5 19.5l2-2.5 1.5 1.5 1.5-2" }, { r: "draw", d: 0.2 }],
  ],
});
