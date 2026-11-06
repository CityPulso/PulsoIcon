import { icon } from "../icon.js";

// Drawn after Simple Icons "watchtower" (CC0-1.0). Watchtower is a trademark of its owner.
export const BrandWatchtower = icon("BrandWatchtower", "brand-watchtower", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M9.5 18.5l1-7.5h3l1 7.5" }],
    ["path", { d: "M7 18.5h10" }],
    ["path", { d: "M10 11V8.5h4V11M9 8.5l3-2.5 3 2.5" }],
    ["path", { d: "M3 9.5h4.5" }, { r: "flicker", o: [5, 9.5] }],
    ["path", { d: "M16.5 9.5H21" }, { r: "flicker", d: 0.1, o: [19, 9.5] }],
  ],
});
