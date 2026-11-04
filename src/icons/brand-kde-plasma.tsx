import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "kdeplasma" (CC0-1.0). KDE Plasma is a trademark of its owner.
export const BrandKdePlasma = createIcon("BrandKdePlasma", "brand-kde-plasma", {
  nodes: [
    ["circle", { cx: "7", cy: "4", r: "1" }, { r: "pop", o: [7, 4] }],
    ["circle", { cx: "5", cy: "12.5", r: "1.75" }, { r: "pop", o: [5, 12.5], d: 0.1 }],
    ["circle", { cx: "10", cy: "19.5", r: "2.25" }, { r: "pop", o: [10, 19.5], d: 0.2 }],
    ["path", { d: "M14 6l6 6-6 6" }, { r: "slide", x: 1, a: 1.5 }],
  ],
});
