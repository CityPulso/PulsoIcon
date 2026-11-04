import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "googlestreetview" (CC0-1.0). Google Street View is a trademark of its owner.

export const BrandGoogleStreetView = createIcon("BrandGoogleStreetView", "brand-google-street-view", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M9.75 6.75A2.5 2.5 0 1 0 10.5 8.5h-2.5" }, { r: "redraw", d: 0.1, o: [8, 8.5] }],
    ["circle", { cx: "15.5", cy: "9", r: "2.75" }, { r: "bounce", x: 0, y: -1, a: 1, d: 0.05, o: [15.5, 9] }],
    ["path", { d: "M10.5 21v-3.5a5 5 0 0 1 10 0V21" }, { r: "bounce", x: 0, y: -1, a: 1, d: 0.05, o: [15.5, 18] }],
  ],
});
