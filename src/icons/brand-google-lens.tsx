import { createIcon } from "../runtime/createIcon.js";

export const BrandGoogleLens = createIcon("BrandGoogleLens", "brand-google-lens", {
  nodes: [
    ["path", { d: "M13 21H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v6" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "3" }, { r: "pulse", d: 0.05, o: [12, 12] }],
    ["circle", { cx: "18", cy: "18", r: "1.5" }, { r: "pop", d: 0.15, o: [18, 18] }],
  ],
});
