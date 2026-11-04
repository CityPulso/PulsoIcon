import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "googlecardboard" (CC0-1.0). Google Cardboard is a trademark of its owner.
export const BrandGoogleCardboard = createIcon("BrandGoogleCardboard", "brand-google-cardboard", {
  nodes: [
    ["path", { d: "M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4.5l-2-3h-3l-2 3H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" }, { r: "float", a: 1, o: [12, 12] }],
    ["circle", { cx: "7.5", cy: "11", r: "1.5" }, { r: "slide", d: 0.1, x: 1, y: 0, a: 1, o: [7.5, 11] }],
    ["circle", { cx: "16.5", cy: "11", r: "1.5" }, { r: "slide", d: 0.1, x: 1, y: 0, a: 1, o: [16.5, 11] }],
  ],
});
