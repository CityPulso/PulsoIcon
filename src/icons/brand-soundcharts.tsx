import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "soundcharts" (CC0-1.0). Soundcharts is a trademark of its owner.
export const BrandSoundcharts = createIcon("BrandSoundcharts", "brand-soundcharts", {
  nodes: [
    ["rect", { x: "3", y: "10", width: "4", height: "4" }, { r: "grow", d: 0, o: [5, 14] }],
    ["rect", { x: "10", y: "6.5", width: "4", height: "7.5" }, { r: "grow", d: 0.1, o: [12, 14] }],
    ["rect", { x: "17", y: "3", width: "4", height: "11" }, { r: "grow", d: 0.2, o: [19, 14] }],
    ["path", { d: "M4 18v3M7 18v2M10 18v3M13 18v2M16 18v3M19 18v2" }, { r: "fade", d: 0.25 }],
  ],
});
