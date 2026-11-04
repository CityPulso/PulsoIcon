import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "exercism" (CC-BY-3.0). Exercism is a trademark of its owner.
export const BrandExercism = createIcon("BrandExercism", "brand-exercism", {
  nodes: [
    ["path", { d: "M6.5 4H5.5A1.5 1.5 0 0 0 4 5.5V10l-2 2 2 2v4.5A1.5 1.5 0 0 0 5.5 20h1" }, { r: "slide", x: -1, a: 1, o: [4, 12] }],
    ["path", { d: "M17.5 4h1A1.5 1.5 0 0 1 20 5.5V10l2 2-2 2v4.5a1.5 1.5 0 0 1-1.5 1.5h-1" }, { r: "slide", x: 1, a: 1, o: [20, 12] }],
    ["path", { d: "M8 11a1.5 1.5 0 0 1 3 0" }, { r: "blink", d: 0.1, o: [12, 10.5] }],
    ["path", { d: "M13 11a1.5 1.5 0 0 1 3 0" }, { r: "blink", d: 0.1, o: [12, 10.5] }],
    ["path", { d: "M10 14.5a2 2 0 0 0 4 0" }, { r: "draw", d: 0.2, o: [12, 15.5] }],
  ],
});
