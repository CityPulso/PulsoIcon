import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "energy-usage-window" (MIT, Copyright (c) 2021 Luca Burgio).
export const EnergyUsageWindow = createIcon("EnergyUsageWindow", "energy-usage-window", {
  nodes: [
    ["path", { d: "M2 19V5C2 3.89543 2.89543 3 4 3H20C21.1046 3 22 3.89543 22 5V19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19Z" }],
    ["path", { d: "M2 7L22 7" }],
    ["path", { d: "M5 5.01L5.01 4.99889" }],
    ["path", { d: "M8 5.01L8.01 4.99889" }],
    ["path", { d: "M11 5.01L11.01 4.99889" }],
    ["path", { d: "M11.6667 11L10 14H14L12.3333 17" }, { r: "flicker", o: [12, 14] }],
  ],
});
