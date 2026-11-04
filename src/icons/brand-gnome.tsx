import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "gnome" (CC0-1.0). GNOME is a trademark of its owner.
export const BrandGnome = createIcon("BrandGnome", "brand-gnome", {
  nodes: [
    ["path", { d: "M17 14c0 4.5-3 7.5-7 7.5-2.5 0-4-1.6-4-4 0-4.2 4.5-7.5 8.5-7.5 1.6 0 2.5 1.6 2.5 4z" }, { r: "press", a: 0.06, o: [11, 21.5] }],
    ["ellipse", { cx: "16.5", cy: "5", rx: "3.5", ry: "2.5" }, { r: "pop", d: 0.1, o: [16.5, 5] }],
    ["circle", { cx: "10.3", cy: "5", r: "1.3" }, { r: "pop", d: 0.16, o: [10.3, 5] }],
    ["circle", { cx: "6.3", cy: "7.3", r: "1.1" }, { r: "pop", d: 0.22, o: [6.3, 7.3] }],
    ["circle", { cx: "4", cy: "11", r: "1" }, { r: "pop", d: 0.28, o: [4, 11] }],
  ],
});
