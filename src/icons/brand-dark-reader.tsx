import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "darkreader" (CC0-1.0). Dark Reader is a trademark of its owner.
export const BrandDarkReader = createIcon("BrandDarkReader", "brand-dark-reader", {
  nodes: [
    ["path", { d: "M4 21v-10a8 8 0 0 1 16 0v10" }, { r: "press", a: 0.04, o: [12, 21] }],
    ["circle", { cx: "8.5", cy: "11.5", r: "2.5" }, { r: "blink", d: 0.1, o: [12, 11.5] }],
    ["circle", { cx: "15.5", cy: "11.5", r: "2.5" }, { r: "blink", d: 0.1, o: [12, 11.5] }],
    ["path", { d: "M11 11.5h2" }, { r: "blink", d: 0.1, o: [12, 11.5] }],
    ["path", { d: "M10 17v2M12 17v2M14 17v2" }, { r: "bounce", d: 0.2, y: -1, a: 0.8 }],
  ],
});
