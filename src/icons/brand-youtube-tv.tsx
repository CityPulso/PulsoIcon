import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "youtubetv" (CC0-1.0). YouTube TV is a trademark of its owner.

export const BrandYoutubeTv = createIcon("BrandYoutubeTv", "brand-youtube-tv", {
  nodes: [
    ["rect", { x: "2", y: "3.5", width: "20", height: "14", rx: "3" }, { r: "press", a: 0.04, o: [12, 10.5] }],
    ["path", { d: "m10 8 5 2.5-5 2.5z" }, { r: "pop", d: 0.1, a: 0.35, o: [12, 10.5] }],
    ["path", { d: "M8 21h8" }, { r: "growX", d: 0.2, o: [12, 21] }],
  ],
});
