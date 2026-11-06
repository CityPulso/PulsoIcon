import { icon } from "../icon.js";

// Drawn after Simple Icons "fastly" (CC0-1.0). Fastly is a trademark of its owner.
export const BrandFastly = icon("BrandFastly", "brand-fastly", {
  nodes: [
    ["circle", { cx: "12", cy: "13.5", r: "8" }, { r: "pulse", a: 0.05, o: [12, 13.5] }],
    ["path", { d: "M12 5.5V3M10 2.5h4" }, { r: "press", a: 0.2, o: [12, 3] }],
    ["path", { d: "M12 13.5l3-3" }, { r: "spin", d: 0.05, o: [12, 13.5] }],
    ["path", { d: "M12 8.5v.5M17 13.5h-.5M12 18.5V18M7 13.5h.5" }, { r: "fade", d: 0.1, o: [12, 13.5] }],
  ],
});
