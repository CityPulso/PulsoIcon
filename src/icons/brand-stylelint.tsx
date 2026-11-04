import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "stylelint" (CC0-1.0). stylelint is a trademark of its owner.
export const BrandStylelint = createIcon("BrandStylelint", "brand-stylelint", {
  nodes: [
    ["path", { d: "M3 3l9 18 9-18" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M7.5 3L12 8.5 16.5 3" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M9.5 10.5l5 2v-2l-5 2z" }, { r: "wobble", d: 0.1, a: 10, o: [12, 11.5] }],
    ["path", { d: "M12 15h.01" }, { r: "pop", d: 0.2, o: [12, 15] }],
    ["path", { d: "M12 18h.01" }, { r: "pop", d: 0.3, o: [12, 18] }],
  ],
});
