import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "lenovo" (CC0-1.0). Lenovo is a trademark of its owner.

export const BrandLenovo = createIcon("BrandLenovo", "brand-lenovo", {
  nodes: [
    ["rect", { x: "2", y: "6", width: "20", height: "12", rx: "1.5" }, { r: "press", a: 0.03, o: [12, 12] }],
    ["path", { d: "M6.5 9v6h3.5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M12.5 12h5a2.5 2.5 0 1 0-.73 1.77" }, { r: "draw", d: 0.25 }],
  ],
});
