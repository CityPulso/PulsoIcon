import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "instructure" (CC0-1.0). Instructure is a trademark of its owner.
export const BrandInstructure = createIcon("BrandInstructure", "brand-instructure", {
  nodes: [
    ["path", { d: "M12 2l3.5 2L12 6 8.5 4z" }, { r: "pop", o: [12, 4] }],
    ["path", { d: "M6.5 5.5l3.5 2-3.5 2-3.5-2z" }, { r: "pop", d: 0.08, o: [6.5, 7.5] }],
    ["path", { d: "M17.5 5.5l3.5 2-3.5 2-3.5-2z" }, { r: "pop", d: 0.16, o: [17.5, 7.5] }],
    ["path", { d: "M2.5 16.5L12 11.5l9.5 5-9.5 5z" }, { r: "press", d: 0.24, a: 0.06, o: [12, 16.5] }],
  ],
});
