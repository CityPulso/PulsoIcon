import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "turso" (CC0-1.0). Turso is a trademark of its owner.
export const BrandTurso = createIcon("BrandTurso", "brand-turso", {
  nodes: [
    ["path", { d: "M6 9h12v5l-3.5 6h-5L6 14z" }, { r: "wobble", a: 4, o: [12, 14] }],
    ["path", { d: "M7 9 4.5 3M5.5 5.5 3 5" }, { r: "wobble", a: 4, o: [12, 14] }],
    ["path", { d: "M17 9l2.5-6M18.5 5.5 21 5" }, { r: "wobble", a: 4, o: [12, 14] }],
    ["path", { d: "M9 12.5h1.5M13.5 12.5H15" }, { r: "blink", d: 0.2, o: [12, 12.5] }],
  ],
});
