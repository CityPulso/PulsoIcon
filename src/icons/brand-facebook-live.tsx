import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "facebooklive" (CC0-1.0). Facebook Live is a trademark of its owner.
export const BrandFacebookLive = createIcon("BrandFacebookLive", "brand-facebook-live", {
  nodes: [
    ["circle", { cx: "8", cy: "12", r: "6" }, { r: "press", a: 0.06, o: [8, 12] }],
    ["path", { d: "M10 8.5h-.5A1.5 1.5 0 0 0 8 10v8" }, { r: "draw", d: 0.05, o: [9, 13] }],
    ["path", { d: "M6.5 12.5H10" }, { r: "draw", d: 0.12, o: [8, 12.5] }],
    ["path", { d: "M17 8.5a5 5 0 0 1 0 7" }, { r: "fade", d: 0.1, o: [17, 12] }],
    ["path", { d: "M19.8 5.7a9 9 0 0 1 0 12.6" }, { r: "fade", d: 0.2, o: [19.8, 12] }],
  ],
});
