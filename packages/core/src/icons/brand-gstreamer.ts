import { icon } from "../icon.js";

// Drawn after Simple Icons "gstreamer" (CC0-1.0). GStreamer is a trademark of its owner.

export const BrandGstreamer = icon("BrandGstreamer", "brand-gstreamer", {
  text: true,
  nodes: [
    ["path", { d: "M2 8.5c1.2-1 2.3-1 3.5 0s2.3 1 3.5 0" }, { r: "draw" }],
    ["path", { d: "M2 12c1.2-1 2.3-1 3.5 0s2.3 1 3.5 0" }, { r: "draw", d: 0.1 }],
    ["circle", { cx: "15.5", cy: "10", r: "3.5" }, { r: "press", a: 0.06, o: [15.5, 14] }],
    ["path", { d: "M19 6.5v9a4 4 0 0 1-7 2.6" }, { r: "press", a: 0.06, o: [15.5, 14] }],
  ],
});
