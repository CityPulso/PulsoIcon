import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "showtime" (CC0-1.0). Showtime is a trademark of its owner.

export const BrandShowtime = createIcon("BrandShowtime", "brand-showtime", {
  nodes: [
    ["path", { d: "M4 6a10 10 0 0 1 16 0" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M4 18a10 10 0 0 0 16 0" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M7 9.5A1.5 1.5 0 0 0 5.5 8.5h-.5A1.5 1.5 0 0 0 3.5 10c0 2 3.5 1.5 3.5 3.8A1.5 1.5 0 0 1 5.5 15.5H5a1.5 1.5 0 0 1-1.5-1" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M9.5 8.5v7M14 8.5v7M9.5 12H14" }, { r: "draw", d: 0.15 }],
    ["ellipse", { cx: "18.5", cy: "12", rx: "2.5", ry: "3.5" }, { r: "draw", d: 0.25 }],
  ],
});
