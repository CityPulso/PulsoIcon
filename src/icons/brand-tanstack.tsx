import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "tanstack" (CC0-1.0). TanStack is a trademark of its owner.
export const BrandTanstack = createIcon("BrandTanstack", "brand-tanstack", {
  nodes: [
    ["ellipse", { cx: "12", cy: "12", rx: "8", ry: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M12 13V7M8 8.5C9 6.5 11 6 12 7c1-1 3-.5 4 1.5" }, { r: "sway", a: 8, o: [12, 13] }],
    ["path", { d: "M7 16c1.7-1 3.3 1 5 0s3.3 1 5 0" }, { r: "slide", x: 1, y: 0, a: 0.6 }],
    ["path", { d: "M8.5 19c1.2-.7 2.3.7 3.5 0s2.3.7 3.5 0" }, { r: "slide", x: -1, y: 0, a: 0.6 }],
  ],
});
