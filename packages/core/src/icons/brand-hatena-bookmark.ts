import { icon } from "../icon.js";

// Drawn after Simple Icons "hatenabookmark" (CC0-1.0). Hatena Bookmark is a trademark of its owner.

export const BrandHatenaBookmark = icon("BrandHatenaBookmark", "brand-hatena-bookmark", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "3" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M7 7.5h3a2 2 0 0 1 0 4H7z" }],
    ["path", { d: "M7 11.5h3.5a2.25 2.25 0 0 1 0 4.5H7z" }],
    ["path", { d: "M16.5 7.5v5" }, { r: "bounce", d: 0.1, y: -1, a: 1, o: [16.5, 12] }],
    ["path", { d: "M16.5 16h.01" }, { r: "bounce", d: 0.1, y: -1, a: 1, o: [16.5, 16] }],
  ],
});
