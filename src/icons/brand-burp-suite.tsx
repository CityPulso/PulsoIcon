import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "burpsuite" (CC0-1.0). Burp Suite is a trademark of its owner.
export const BrandBurpSuite = createIcon("BrandBurpSuite", "brand-burp-suite", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }],
    ["path", { d: "M14 5v4l-4 3h4.5l-4 3.5v3.5" }, { r: "draw", o: [12, 12] }],
  ],
});
