import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "raycast" (CC0-1.0). Raycast is a trademark of its owner.
export const BrandRaycast = createIcon("BrandRaycast", "brand-raycast", {
  nodes: [
    ["rect", { x: "8", y: "8", width: "8", height: "8", rx: "1" }, { r: "press", a: 0.08, o: [12, 12] }],
    ["path", { d: "M15 3l6 6" }, { r: "slide", x: 0.7, y: -0.7, a: 1.5 }],
    ["path", { d: "M3 15l6 6" }, { r: "slide", x: -0.7, y: 0.7, a: 1.5 }],
    ["path", { d: "M12 3h-4.5M3 7.5V12" }, { r: "fade", d: 0.1 }],
    ["path", { d: "M12 21h4.5M21 16.5V12" }, { r: "fade", d: 0.1 }],
  ],
});
