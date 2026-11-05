import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "kleinanzeigen" (CC0-1.0). Kleinanzeigen is a trademark of its owner.
export const BrandKleinanzeigen = createIcon("BrandKleinanzeigen", "brand-kleinanzeigen", {
  text: true,
  nodes: [
    ["rect", { x: "4", y: "2", width: "6.5", height: "20", rx: "3.25" }, { r: "press", a: 0.04, o: [7.25, 22] }],
    ["path", { d: "M10.5 11a3 3 0 1 1 3 3.5" }, { r: "draw", d: 0.1 }],
    ["circle", { cx: "15.5", cy: "17", r: "4" }, { r: "pop", d: 0.15, o: [15.5, 17] }],
  ],
});
