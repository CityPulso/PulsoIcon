import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "theweatherchannel" (CC0-1.0). The Weather Channel is a trademark of its owner.

export const BrandTheWeatherChannel = createIcon("BrandTheWeatherChannel", "brand-the-weather-channel", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }],
    ["path", { d: "M7 8h4" }, { r: "growX", o: [7, 8] }],
    ["path", { d: "M7 12h10" }, { r: "growX", d: 0.08, o: [7, 12] }],
    ["path", { d: "M7 16h8" }, { r: "growX", d: 0.16, o: [7, 16] }],
  ],
});
