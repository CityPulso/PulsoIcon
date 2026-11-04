import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "astonmartin" (CC0-1.0). Aston Martin is a trademark of its owner.
export const BrandAstonMartin = createIcon("BrandAstonMartin", "brand-aston-martin", {
  nodes: [
    ["rect", { x: "9", y: "10", width: "6", height: "3", rx: "0.5" }, { r: "press", a: 0.05, o: [12, 11.5] }],
    ["path", { d: "M9 10.5C6.5 9.5 4.5 9 2 9M15 10.5c2.5-1 4.5-1.5 7-1.5" }, { r: "float", a: 0.8, o: [12, 10] }],
    ["path", { d: "M9 12.5c-2-.5-4-1-6-.8M15 12.5c2-.5 4-1 6-.8" }, { r: "float", d: 0.05, a: 0.8, o: [12, 12] }],
    ["path", { d: "M9.5 15c-1.5 0-3-.3-4.5-.8M14.5 15c1.5 0 3-.3 4.5-.8" }, { r: "float", d: 0.1, a: 0.8, o: [12, 14.5] }],
  ],
});
