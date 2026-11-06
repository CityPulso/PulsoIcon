import { icon } from "../icon.js";

// Drawn after Simple Icons "overcast" (CC0-1.0). Overcast is a trademark of its owner.
export const BrandOvercast = icon("BrandOvercast", "brand-overcast", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M12 11.5 9.5 20.5M12 11.5l2.5 9M10.5 17h3" }],
    ["path", { d: "M12 11.5h.01" }],
    ["path", { d: "M10 9.5a3 3 0 0 0 0 4M14 9.5a3 3 0 0 1 0 4" }, { r: "pulse", a: 0.2, o: [12, 11.5] }],
    ["path", { d: "M8 7.5a6 6 0 0 0 0 8M16 7.5a6 6 0 0 1 0 8" }, { r: "pulse", a: 0.12, d: 0.12, o: [12, 11.5] }],
  ],
});
