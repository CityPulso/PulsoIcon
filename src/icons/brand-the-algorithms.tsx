import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "thealgorithms" (CC0-1.0). The Algorithms is a trademark of its owner.

export const BrandTheAlgorithms = createIcon("BrandTheAlgorithms", "brand-the-algorithms", {
  nodes: [
    ["path", { d: "M2 20 9 4h2.5" }, { r: "draw" }],
    ["path", { d: "M8 20 14 7" }, { r: "draw", d: 0.08 }],
    ["path", { d: "M14 7l6 13" }, { r: "draw", d: 0.16 }],
    ["path", { d: "M10.5 15h4" }, { r: "draw", d: 0.24 }],
    ["circle", { cx: "16.5", cy: "15", r: "1" }, { r: "pop", d: 0.3, o: [16.5, 15] }],
  ],
});
