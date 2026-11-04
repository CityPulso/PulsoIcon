import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "atandt" (CC0-1.0). AT&T is a trademark of its owner.
export const BrandAtAndT = createIcon("BrandAtAndT", "brand-at-and-t", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M4.3 6Q12 8 19.7 6" }, { r: "draw", d: 0, o: [12, 6] }],
    ["path", { d: "M2.5 10Q12 13 21.5 10" }, { r: "draw", d: 0.08, o: [12, 10] }],
    ["path", { d: "M2.5 14Q12 17 21.5 14" }, { r: "draw", d: 0.16, o: [12, 14] }],
    ["path", { d: "M4.3 18Q12 20 19.7 18" }, { r: "draw", d: 0.24, o: [12, 18] }],
  ],
});
