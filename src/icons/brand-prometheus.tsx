import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "prometheus" (CC0-1.0). Prometheus is a trademark of its owner.
export const BrandPrometheus = createIcon("BrandPrometheus", "brand-prometheus", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M12 4.5c2.3 2.4 3.5 4.3 3.5 5.8a3.5 3.5 0 0 1-7 0c0-1.5 1.2-3.4 3.5-5.8z" }, { r: "sway", a: 5, o: [12, 13.8] }],
    ["path", { d: "M8 16.5h8" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M10 19h4" }, { r: "draw", d: 0.25 }],
  ],
});
