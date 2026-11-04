import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "duckduckgo" (CC0-1.0). DuckDuckGo is a trademark of its owner.
export const BrandDuckduckgo = createIcon("BrandDuckduckgo", "brand-duckduckgo", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M9 21.5V9.5a3 3 0 0 1 6 0V11" }, { r: "tilt", a: 8, o: [9, 21] }],
    ["path", { d: "M13 12.5c1.5 0 3 .3 4 1.2-1 .8-2.5 1-4 .5" }, { r: "tilt", a: 8, o: [9, 21] }],
    ["path", { d: "M12.5 9h.01" }, { r: "tilt", a: 8, o: [9, 21] }],
  ],
});
