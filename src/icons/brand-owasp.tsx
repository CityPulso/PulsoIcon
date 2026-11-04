import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "owasp" (CC0-1.0). OWASP is a trademark of its owner.
export const BrandOwasp = createIcon("BrandOwasp", "brand-owasp", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["circle", { cx: "16", cy: "8.5", r: "1.5" }, { r: "wobble", o: [12, 12] }],
    ["path", { d: "M14 10.5c-3 0-6.5 1.5-8.5 4.5 3 0 6.5-1.5 8.5-4.5z" }, { r: "wobble", o: [12, 12] }],
    ["path", { d: "M13.5 10C12.5 7.5 10 6 7 5.5c.5 2.5 3 4 6.5 4.5z" }, { r: "flicker", d: 0.1, o: [13.5, 10] }],
    ["path", { d: "M17 7l1.5-2.5" }, { r: "wobble", o: [12, 12] }],
  ],
});
