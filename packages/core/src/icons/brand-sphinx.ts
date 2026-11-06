import { icon } from "../icon.js";

// Drawn after Simple Icons "sphinx" (BSD-3-Clause). Sphinx is a trademark of its owner.
export const BrandSphinx = icon("BrandSphinx", "brand-sphinx", {
  nodes: [
    ["path", { d: "M3 6c5.5-2 12.5-2 19 0" }, { r: "draw" }],
    ["path", { d: "M3.5 11c3-3 9-3.5 13.5 0-4 3-10 3-13.5 0z" }, { r: "blink", d: 0.1, o: [10, 11] }],
    ["circle", { cx: "10", cy: "10.6", r: "1.4" }, { r: "blink", d: 0.1, o: [10, 11] }],
    ["path", { d: "M17 11h4.5" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M8 13.5v7" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M12 13.5c.5 3 3 5 5.5 4.5 1.2-.3 1.4-1.8.4-2.2" }, { r: "draw", d: 0.3 }],
  ],
});
