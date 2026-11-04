import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "googleearth" (CC0-1.0). Google Earth is a trademark of its owner.

export const BrandGoogleEarth = createIcon("BrandGoogleEarth", "brand-google-earth", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M2.5 10c3.2-3.4 6.4-3.4 9.5 0s6.3 3.4 9.5 0" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M3 15c3-3.2 6.1-3.2 9 0s6 3.2 9 0" }, { r: "draw", d: 0.15 }],
  ],
});
