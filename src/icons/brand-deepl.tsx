import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "deepl" (CC0-1.0). DeepL is a trademark of its owner.
export const BrandDeepl = createIcon("BrandDeepl", "brand-deepl", {
  nodes: [
    ["path", { d: "M12 2l8 4.5v9L12 20l-4 2v-4l-4-2.5v-9z" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["circle", { cx: "9.5", cy: "8.5", r: "1.25" }, { r: "pop", o: [9.5, 8.5] }],
    ["circle", { cx: "9.5", cy: "14", r: "1.25" }, { r: "pop", d: 0.1, o: [9.5, 14] }],
    ["circle", { cx: "15", cy: "11.25", r: "1.25" }, { r: "pop", d: 0.2, o: [15, 11.25] }],
    ["path", { d: "M10.6 9.1l3.3 1.6M10.6 13.4l3.3-1.6" }, { r: "draw", d: 0.1, o: [12, 11] }],
  ],
});
