import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "kando" (CC-BY-4.0). Kando is a trademark of its owner.
export const BrandKando = createIcon("BrandKando", "brand-kando", {
  nodes: [
    ["circle", { cx: "7", cy: "7.5", r: "3" }, { r: "pop", o: [7, 7.5] }],
    ["ellipse", { cx: "17", cy: "6", rx: "2.5", ry: "3.5" }, { r: "pop", o: [17, 6], d: 0.08 }],
    ["ellipse", { cx: "6", cy: "16", rx: "2.5", ry: "3" }, { r: "pop", o: [6, 16], d: 0.16 }],
    ["circle", { cx: "12.5", cy: "19", r: "2.5" }, { r: "pop", o: [12.5, 19], d: 0.24 }],
    ["circle", { cx: "18", cy: "15", r: "2.5" }, { r: "pop", o: [18, 15], d: 0.32 }],
  ],
});
