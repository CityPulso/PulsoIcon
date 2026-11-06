import { icon } from "../icon.js";

// Drawn after Simple Icons "circuitverse" (CC0-1.0). CircuitVerse is a trademark of its owner.

export const BrandCircuitverse = icon("BrandCircuitverse", "brand-circuitverse", {
  nodes: [
    ["path", { d: "M12 3a9 9 0 0 1 0 18V3" }],
    ["path", { d: "M12 3c2.5 2.5 3.5 5.5 3.5 9s-1 6.5-3.5 9M12 12h9" }],
    ["path", { d: "M12 8H8.5L6.5 6" }, { r: "draw" }],
    ["path", { d: "M12 12H5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M12 16H8.5l-2 2" }, { r: "draw", d: 0.2 }],
    ["circle", { cx: "5.5", cy: "5", r: "1" }, { r: "pop", d: 0.3, o: [5.5, 5] }],
    ["circle", { cx: "3.5", cy: "12", r: "1" }, { r: "pop", d: 0.35, o: [3.5, 12] }],
    ["circle", { cx: "5.5", cy: "19", r: "1" }, { r: "pop", d: 0.4, o: [5.5, 19] }],
  ],
});
