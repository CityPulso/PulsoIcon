import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "geocaching" (CC0-1.0). Geocaching is a trademark of its owner.
export const BrandGeocaching = createIcon("BrandGeocaching", "brand-geocaching", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "5" }, { r: "turn", d: 0.1, a: 45, o: [12, 12] }],
    ["path", { d: "M12 3v4M12 17v4M3 12h4M17 12h4" }, { r: "draw", d: 0.2 }],
  ],
});
