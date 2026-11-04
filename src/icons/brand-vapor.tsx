import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "vapor" (CC0-1.0). Vapor is a trademark of its owner.

export const BrandVapor = createIcon("BrandVapor", "brand-vapor", {
  nodes: [
    ["path", { d: "M12 2.5l8.5 5.5-8.5 5.5L3.5 8z" }, { r: "float", o: [12, 8] }],
    ["path", { d: "M12 5.5l1.7 2.3a2 2 0 1 1-3.4 0z" }, { r: "drop", d: 0.1, y: -1, a: 0.3, o: [12, 8] }],
    ["path", { d: "M3.5 12l8.5 5.5 8.5-5.5" }, { r: "float", d: 0.08, o: [12, 15] }],
    ["path", { d: "M3.5 16l8.5 5.5 8.5-5.5" }, { r: "float", d: 0.16, o: [12, 19] }],
  ],
});
