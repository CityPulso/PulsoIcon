import { createIcon } from "../runtime/createIcon.js";

export const TrendingUpDown = createIcon("TrendingUpDown", "trending-up-down", {
  nodes: [
    ["path", { d: "M14.828 14.828 21 21" }, { r: "slide", d: 0.1, x: 1, y: 1, a: 1.5, o: [17.914, 17.914] }],
    ["path", { d: "M21 16v5h-5" }, { r: "slide", d: 0.1, x: 1, y: 1, a: 1.5, o: [17.914, 17.914] }],
    ["path", { d: "m21 3-9 9-4-4-6 6" }, { r: "slide", x: 1, y: -1, a: 1.5, o: [11.5, 8.5] }],
    ["path", { d: "M21 8V3h-5" }, { r: "slide", x: 1, y: -1, a: 1.5, o: [11.5, 8.5] }],
  ],
});
