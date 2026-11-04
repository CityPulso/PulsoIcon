import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "gin" (CC-BY-4.0). Gin is a trademark of its owner.
export const BrandGin = createIcon("BrandGin", "brand-gin", {
  nodes: [
    ["path", { d: "M4.5 7h15L18 21H6z" }, { r: "press", a: 0.04, o: [12, 21] }],
    ["path", { d: "M5 11h14" }, { r: "sway", d: 0.1, a: 4, o: [12, 11] }],
    ["path", { d: "M15 7a3.5 3.5 0 0 1 5.5-3.5L17 7" }, { r: "swing", d: 0.15, a: 10, o: [17, 7] }],
    ["path", { d: "M10 15h.01M14 15h.01" }, { r: "blink", d: 0.25, o: [12, 15] }],
  ],
});
