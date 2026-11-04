import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "songkick" (CC0-1.0). Songkick is a trademark of its owner.
export const BrandSongkick = createIcon("BrandSongkick", "brand-songkick", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "4" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M11 10.8a1.6 1.6 0 0 0-1.5-.8h-1a1.75 1.75 0 0 0 0 3.5h1a1.75 1.75 0 0 1 0 3.5h-1a1.6 1.6 0 0 1-1.5-.8" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M13.5 7v10M17 10l-3.5 3.5M15.2 11.8 17.5 17" }, { r: "draw", d: 0.2 }],
  ],
});
