import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "paddle" (CC0-1.0). Paddle is a trademark of its owner.
export const BrandPaddle = createIcon("BrandPaddle", "brand-paddle", {
  nodes: [
    ["path", { d: "M11 21V3h3.5a5 5 0 0 1 0 10H11" }, { r: "draw", o: [14, 12] }],
    ["path", { d: "M5.5 3.5c.4 2.2 1.3 3.1 3.5 3.5-2.2.4-3.1 1.3-3.5 3.5-.4-2.2-1.3-3.1-3.5-3.5 2.2-.4 3.1-1.3 3.5-3.5z" }, { r: "twinkle", d: 0.2, o: [5.5, 7] }],
  ],
});
