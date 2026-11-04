import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "googletv" (CC0-1.0). Google TV is a trademark of its owner.

export const BrandGoogleTv = createIcon("BrandGoogleTv", "brand-google-tv", {
  nodes: [
    ["path", { d: "M2 15V8a3 3 0 0 1 3-3h12" }, { r: "slide", x: -1, y: -1, a: 0.8 }],
    ["path", { d: "M22 9v7a3 3 0 0 1-3 3H7" }, { r: "slide", x: 1, y: 1, a: 0.8 }],
    ["rect", { x: "6", y: "8.5", width: "12", height: "7", rx: "1.5" }, { r: "blink", d: 0.15, o: [12, 12] }],
  ],
});
