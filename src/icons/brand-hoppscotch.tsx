import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "hoppscotch" (CC0-1.0). Hoppscotch is a trademark of its owner.

export const BrandHoppscotch = createIcon("BrandHoppscotch", "brand-hoppscotch", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "6" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["ellipse", { cx: "12", cy: "12", rx: "10", ry: "3.5", transform: "rotate(-25 12 12)" }, { r: "turn", a: 20, o: [12, 12] }],
    ["path", { d: "M10 10h.01M14 12.5h.01" }, { r: "pop", d: 0.2, o: [12, 11] }],
  ],
});
