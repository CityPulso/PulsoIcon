import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "uml" (CC0-1.0). UML is a trademark of its owner.

export const BrandUml = createIcon("BrandUml", "brand-uml", {
  nodes: [
    ["path", { d: "M12 2l9 5v10l-9 5-9-5V7z" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M3 7l9 5 9-5M12 12v10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M5.5 16.5v-5l2 3 2-1.5v5" }, { r: "draw", d: 0.1, o: [7.5, 14] }],
    ["path", { d: "M15 13v5l3.5-2" }, { r: "draw", d: 0.25, o: [16.5, 16] }],
  ],
});
