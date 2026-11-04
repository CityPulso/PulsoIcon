import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "mpv" (CC0-1.0). mpv is a trademark of its owner.
export const BrandMpv = createIcon("BrandMpv", "brand-mpv", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["circle", { cx: "13", cy: "11", r: "6" }, { r: "pulse", o: [13, 11] }],
    ["path", { d: "M11.5 8.5v5l4-2.5z" }, { r: "press", d: 0.1, a: 0.1, o: [13, 11] }],
  ],
});
