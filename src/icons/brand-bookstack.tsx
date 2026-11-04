import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "bookstack" (CC0-1.0). BookStack is a trademark of its owner.
export const BrandBookstack = createIcon("BrandBookstack", "brand-bookstack", {
  nodes: [
    ["path", { d: "M12 3l9 4-9 4-9-4z" }, { r: "drop", x: 0, y: -1, a: 1 }],
    ["path", { d: "M3 7v3.5l9 4 9-4V7" }, { r: "drop", d: 0.06, x: 0, y: -1, a: 1 }],
    ["path", { d: "M3 10.5V14l9 4 9-4v-3.5" }, { r: "drop", d: 0.12, x: 0, y: -1, a: 1 }],
    ["path", { d: "M3 14v3.5l9 4 9-4V14" }, { r: "press", d: 0.18, a: 0.04, o: [12, 21.5] }],
  ],
});
