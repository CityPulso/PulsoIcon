import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "wpengine" (CC0-1.0). WP Engine is a trademark of its owner.
export const BrandWpEngine = createIcon("BrandWpEngine", "brand-wp-engine", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "5", height: "5", rx: "1" }, { r: "press", a: 0.1, o: [5.5, 5.5] }],
    ["rect", { x: "16", y: "3", width: "5", height: "5", rx: "1" }, { r: "press", d: 0.05, a: 0.1, o: [18.5, 5.5] }],
    ["rect", { x: "3", y: "16", width: "5", height: "5", rx: "1" }, { r: "press", d: 0.1, a: 0.1, o: [5.5, 18.5] }],
    ["rect", { x: "16", y: "16", width: "5", height: "5", rx: "1" }, { r: "press", d: 0.15, a: 0.1, o: [18.5, 18.5] }],
    ["polygon", { points: "12 7.5 16.5 12 12 16.5 7.5 12" }, { r: "turn", a: 90, o: [12, 12] }],
    ["path", { d: "M12 12h.01" }, { r: "pop", d: 0.2, o: [12, 12] }],
  ],
});
