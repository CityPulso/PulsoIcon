import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "unicode" (CC0-1.0). Unicode is a trademark of its owner.

export const BrandUnicode = createIcon("BrandUnicode", "brand-unicode", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M7 8.5v4.5a3 3 0 0 0 6 0V8.5" }, { r: "draw", d: 0.1, o: [10, 12] }],
    ["path", { d: "M16.5 11.5V16" }, { r: "draw", d: 0.2, o: [16.5, 14] }],
    ["path", { d: "M16.5 8.5h.01" }, { r: "pop", d: 0.3, o: [16.5, 8.5] }],
  ],
});
