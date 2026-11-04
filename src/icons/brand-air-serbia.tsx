import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "airserbia" (CC0-1.0). Air Serbia is a trademark of its owner.
export const BrandAirSerbia = createIcon("BrandAirSerbia", "brand-air-serbia", {
  nodes: [
    ["path", { d: "M12 11.5C9.5 8 6.5 7.5 4.5 9l-2-1 1.5-2.5 2.5.5" }, { r: "lift", x: -0.4, a: -6 }],
    ["path", { d: "M12 11.5c2.5-3.5 5.5-4 7.5-2.5l2-1L20 5.5 17.5 6" }, { r: "lift", x: 0.4, a: 6 }],
    ["path", { d: "M10 12.5c-2.5 0-4.5 1-6.5 3M14 12.5c2.5 0 4.5 1 6.5 3" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M12 11.5l3 3.5-3 3.5-3-3.5z" }, { r: "pop", d: 0.15, o: [12, 15] }],
    ["path", { d: "M10 21l2-2.5 2 2.5" }, { r: "draw", d: 0.25 }],
  ],
});
