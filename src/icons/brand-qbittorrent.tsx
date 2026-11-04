import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "qbittorrent" (CC0-1.0). qbittorrent is a trademark of its owner.
export const BrandQbittorrent = createIcon("BrandQbittorrent", "brand-qbittorrent", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["circle", { cx: "8", cy: "12.5", r: "2.5" }, { r: "draw" }],
    ["path", { d: "M10.5 10v7.5" }, { r: "draw", d: 0.08 }],
    ["path", { d: "M13.5 6.5V15" }, { r: "draw", d: 0.16 }],
    ["circle", { cx: "16", cy: "12.5", r: "2.5" }, { r: "draw", d: 0.24 }],
  ],
});
