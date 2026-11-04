import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "qemu" (CC0-1.0). QEMU is a trademark of its owner.
export const BrandQemu = createIcon("BrandQemu", "brand-qemu", {
  nodes: [
    ["path", { d: "M18.5 19.6A10 10 0 1 1 21 15" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M18.5 19.6l3 1.9" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M10 20.5V12c0-2.5 1.5-4.5 3.5-4.5 1.2 0 2.2.6 2.7 1.5l3.8 1-3.8 1c-.6.8-1.6 1.3-2.7 1.5-1.5.3-2.5 1.2-2.5 3" }, { r: "tilt", a: 10, o: [10, 20] }],
    ["path", { d: "M13.5 9.5h.01" }, { r: "tilt", a: 10, o: [10, 20] }],
  ],
});
