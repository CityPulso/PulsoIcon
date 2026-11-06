import { icon } from "../icon.js";

// Drawn after Simple Icons "pagespeedinsights" (CC0-1.0). PageSpeed Insights is a trademark of its owner.
export const BrandPagespeedInsights = icon("BrandPagespeedInsights", "brand-pagespeed-insights", {
  nodes: [
    ["rect", { x: "2", y: "3", width: "20", height: "18", rx: "2" }],
    ["path", { d: "M2 7.5h20M5 5.25h.01M7.5 5.25h.01" }],
    ["path", { d: "M7 17.5a5 5 0 0 1 10 0" }, { r: "draw", o: [12, 17.5] }],
    ["path", { d: "M12 17.5l3-3.5" }, { r: "turn", d: 0.1, a: 40, o: [12, 17.5] }],
  ],
});
