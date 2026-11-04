import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "4d" (CC0-1.0). 4D is a trademark of its owner.
export const Brand4d = createIcon("Brand4d", "brand-4d", {
  nodes: [
    ["rect", { x: "4", y: "2", width: "16", height: "20", rx: "1" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M10 9.5l-3.5 5h4.5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M9.5 11v5.5" }, { r: "draw", d: 0.18 }],
    ["path", { d: "M12.5 10.5h1.5a3 3 0 0 1 0 6h-1.5z" }, { r: "draw", d: 0.25 }],
  ],
});
