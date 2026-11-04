import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "linkfire" (CC0-1.0). Linkfire is a trademark of its owner.

export const BrandLinkfire = createIcon("BrandLinkfire", "brand-linkfire", {
  nodes: [
    ["path", { d: "M12 21a9 9 0 0 1 0-18h9v9a9 9 0 0 1-9 9z" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["rect", { x: "6.5", y: "9.5", width: "6", height: "4", rx: "2" }, { r: "slide", d: 0.1, x: -1, y: 0, a: 1, o: [9.5, 11.5] }],
    ["rect", { x: "11.5", y: "10.5", width: "6", height: "4", rx: "2" }, { r: "slide", d: 0.1, x: 1, y: 0, a: 1, o: [14.5, 12.5] }],
  ],
});
