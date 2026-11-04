import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "trino" (CC0-1.0). Trino is a trademark of its owner.
export const BrandTrino = createIcon("BrandTrino", "brand-trino", {
  nodes: [
    ["circle", { cx: "12", cy: "15.5", r: "6.5" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M10 9.3C8.6 7.5 8 4.5 9 2.5c1.5.5 2 4 1.6 6.6" }, { r: "swing", a: 12, o: [10, 9] }],
    ["path", { d: "M14 9.3c1.4-1.8 2-4.8 1-6.8-1.5.5-2 4-1.6 6.6" }, { r: "swing", d: 0.08, a: -12, o: [14, 9] }],
    ["path", { d: "M9.5 15h.01" }, { r: "blink", d: 0.2, o: [12, 15] }],
    ["path", { d: "M14.5 15h.01" }, { r: "blink", d: 0.2, o: [12, 15] }],
    ["path", { d: "M11 17.5h2" }],
  ],
});
