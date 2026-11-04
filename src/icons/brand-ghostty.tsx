import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "ghostty" (CC0-1.0). Ghostty is a trademark of its owner.
export const BrandGhostty = createIcon("BrandGhostty", "brand-ghostty", {
  nodes: [
    [
      "path",
      { d: "M5 20.5V11a7 7 0 0 1 14 0v9.5a1 1 0 0 1-1.6.8l-1.2-.9-1.6 1.2a1 1 0 0 1-1.2 0L12 20.4l-1.4 1.2a1 1 0 0 1-1.2 0l-1.6-1.2-1.2.9A1 1 0 0 1 5 20.5z" },
      { r: "float", a: 1.5, o: [12, 12] },
    ],
    ["path", { d: "M8 9.5l2.5 2-2.5 2" }, { r: "slide", d: 0.1, x: 1, a: 0.8, o: [9, 11.5] }],
    ["path", { d: "M13 13.5h3" }, { r: "flicker", d: 0.2, o: [14.5, 13.5] }],
  ],
});
