import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "slideshare" (CC0-1.0). SlideShare is a trademark of its owner.
export const BrandSlideshare = createIcon("BrandSlideshare", "brand-slideshare", {
  nodes: [
    ["path", { d: "M3 12V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v8" }],
    ["circle", { cx: "8.5", cy: "8.5", r: "2" }, { r: "bounce", y: -1, a: 1 }],
    ["circle", { cx: "15.5", cy: "8.5", r: "2" }, { r: "bounce", y: -1, a: 1, d: 0.1 }],
    ["path", { d: "M6 14v3.5a2.5 2.5 0 0 0 5 0V14" }, { r: "bounce", y: -1, a: 1 }],
    ["path", { d: "M13 14v3.5a2.5 2.5 0 0 0 5 0V14" }, { r: "bounce", y: -1, a: 1, d: 0.1 }],
  ],
});
