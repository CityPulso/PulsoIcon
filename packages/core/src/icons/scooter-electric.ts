import { icon } from "../icon.js";

// Adapted from Tabler Icons "scooter-electric" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ScooterElectric = icon("ScooterElectric", "scooter-electric", {
  nodes: [
    ["path", { d: "M16 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "spin", o: [18, 17] }],
    ["path", { d: "M4 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "spin", o: [6, 17] }],
    ["path", { d: "M8 17h5a6 6 0 0 1 5 -5v-5a2 2 0 0 0 -2 -2h-1" }],
    ["path", { d: "M10 4l-2 4h3l-2 4" }, { r: "flicker", d: 0.1 }],
  ],
});
