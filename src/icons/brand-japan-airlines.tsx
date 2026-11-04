import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "japanairlines" (CC0-1.0). Japan Airlines is a trademark of its owner.
export const BrandJapanAirlines = createIcon("BrandJapanAirlines", "brand-japan-airlines", {
  nodes: [
    ["path", { d: "M8.5 2.6A10 10 0 1 0 15.5 2.6" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M12.5 19.5c-3-3-3.8-7.5-2.3-10.7" }, { r: "draw", d: 0.1 }],
    ["circle", { cx: "12", cy: "6.8", r: "2" }, { r: "lift", d: 0.2, y: -1, a: 8, o: [12, 8.8] }],
    ["path", { d: "M14 7.3l4.5 1.7" }, { r: "lift", d: 0.2, y: -1, a: 8, o: [12, 8.8] }],
  ],
});
