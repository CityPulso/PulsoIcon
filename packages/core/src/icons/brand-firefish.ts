import { icon } from "../icon.js";

// Drawn after Simple Icons "firefish" (CC0-1.0). Firefish is a trademark of its owner.
export const BrandFirefish = icon("BrandFirefish", "brand-firefish", {
  nodes: [
    ["polygon", { points: "6 3 6 9 12 9" }, { r: "pop", d: 0.05, o: [8, 7] }],
    ["polygon", { points: "15 3 15 9 21 9" }, { r: "pop", d: 0.12, o: [17, 7] }],
    ["polygon", { points: "15 13 15 19 21 19" }, { r: "pop", d: 0.19, o: [17, 17] }],
    ["rect", { x: "3", y: "12", width: "9", height: "9", rx: "2" }],
    ["path", { d: "M6 16.5h.01" }, { r: "blink", d: 0.3, o: [7.5, 16.5] }],
    ["path", { d: "M9 16.5h.01" }, { r: "blink", d: 0.3, o: [7.5, 16.5] }],
  ],
});
