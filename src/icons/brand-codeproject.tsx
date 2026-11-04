import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "codeproject" (CC0-1.0). CodeProject is a trademark of its owner.

export const BrandCodeproject = createIcon("BrandCodeproject", "brand-codeproject", {
  nodes: [
    ["path", { d: "M12 2c-2.5 2.5-5 5-5 8a5 5 0 0 0 10 0c0-3-2.5-5.5-5-8z" }, { r: "wobble", a: 6, o: [12, 15] }],
    ["circle", { cx: "10", cy: "10", r: "1" }, { r: "blink", d: 0.2, o: [12, 10] }],
    ["circle", { cx: "14", cy: "10", r: "1" }, { r: "blink", d: 0.2, o: [12, 10] }],
    ["circle", { cx: "12", cy: "18", r: "2" }],
    ["path", { d: "M10.5 19.5L9 22M13.5 19.5L15 22M10 17.5L7 16M14 17.5l3-1.5" }, { r: "slide", y: -0.5, a: 1, d: 0.1 }],
  ],
});
