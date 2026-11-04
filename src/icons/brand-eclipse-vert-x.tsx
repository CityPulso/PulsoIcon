import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "eclipsevertdotx" (CC0-1.0). Eclipse Vert.x is a trademark of its owner.
export const BrandEclipseVertX = createIcon("BrandEclipseVertX", "brand-eclipse-vert-x", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "3" }],
    ["path", { d: "M6 7l3 7 3-7" }, { r: "draw" }],
    ["path", { d: "M9 17.5h.01" }, { r: "pop", d: 0.2, o: [9, 17.5] }],
    ["path", { d: "M14 7l4 10M18 7l-4 10" }, { r: "spin", a: 90, d: 0.1, o: [16, 12] }],
  ],
});
