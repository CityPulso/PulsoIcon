import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "icomoon" (CC0-1.0). IcoMoon is a trademark of its owner.

export const BrandIcomoon = createIcon("BrandIcomoon", "brand-icomoon", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M12 2c3 3.5 3 16.5 0 20" }, { r: "blink", d: 0.1, o: [12, 12] }],
    ["circle", { cx: "7.5", cy: "12", r: "1.5" }, { r: "slide", x: 1, a: 1.2, d: 0.15, o: [7.5, 12] }],
  ],
});
