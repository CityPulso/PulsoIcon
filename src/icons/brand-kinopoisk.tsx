import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "kinopoisk" (CC0-1.0). Kinopoisk is a trademark of its owner.
export const BrandKinopoisk = createIcon("BrandKinopoisk", "brand-kinopoisk", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M8 7v10" }, { r: "draw" }],
    ["path", { d: "M11.22 9.54L14.26 5.2" }, { r: "draw", d: 0.08 }],
    ["path", { d: "M12.15 10.59L17.62 7.68" }, { r: "draw", d: 0.14 }],
    ["path", { d: "M12.5 12L18.7 12" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M12.15 13.41L17.62 16.32" }, { r: "draw", d: 0.26 }],
    ["path", { d: "M11.22 14.46L14.26 18.8" }, { r: "draw", d: 0.32 }],
  ],
});
