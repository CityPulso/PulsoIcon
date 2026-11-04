import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "wpexplorer" (CC0-1.0). WPExplorer is a trademark of its owner.
export const BrandWpexplorer = createIcon("BrandWpexplorer", "brand-wpexplorer", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M6.5 10.5l8-4.5 1.75 3.25-8 4.5z" }, { r: "turn", d: 0.05, a: -15, o: [12, 11] }],
    ["path", { d: "M12 12.5 9 17.5M12 12.5l3 5M12 12.5v5" }, { r: "press", d: 0.05, a: 0.08, o: [12, 17.5] }],
  ],
});
