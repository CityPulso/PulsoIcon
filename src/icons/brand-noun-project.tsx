import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "nounproject" (CC0-1.0). Noun Project is a trademark of its owner.
export const BrandNounProject = createIcon("BrandNounProject", "brand-noun-project", {
  nodes: [
    ["circle", { cx: "5", cy: "12", r: "2.5" }, { r: "pop", o: [5, 12] }],
    ["path", { d: "M10 10l4 4M14 10l-4 4" }, { r: "spin", d: 0.1, a: 90, o: [12, 12] }],
    ["rect", { x: "16.5", y: "9.5", width: "5", height: "5" }, { r: "press", d: 0.2, a: 0.15, o: [19, 12] }],
  ],
});
