import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "tekton" (CC0-1.0). Tekton is a trademark of its owner.

export const BrandTekton = createIcon("BrandTekton", "brand-tekton", {
  nodes: [
    ["path", { d: "M5 11V3.5L9.5 7h5L19 3.5V11a7 7 0 0 1-14 0z" }, { r: "tilt", a: 6, o: [12, 18] }],
    ["path", { d: "M12 7v2" }, { r: "tilt", a: 6, o: [12, 18] }],
    ["path", { d: "M9.5 12h.01" }, { r: "blink", o: [9.5, 12] }],
    ["path", { d: "M14.5 12h.01" }, { r: "blink", o: [14.5, 12] }],
    ["path", { d: "M11 15l1 1 1-1" }, { r: "tilt", a: 6, o: [12, 18] }],
  ],
});
