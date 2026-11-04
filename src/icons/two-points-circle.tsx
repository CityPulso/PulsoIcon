import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "two-points-circle" (MIT, Copyright (c) 2021 Luca Burgio).
export const TwoPointsCircle = createIcon("TwoPointsCircle", "two-points-circle", {
  nodes: [
    ["path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" }],
    ["path", { d: "M5 5h.01" }, { r: "pop", o: [5, 5] }],
    ["path", { d: "M19 19h.01" }, { r: "pop", d: 0.3, o: [19, 19] }],
    ["path", { d: "M19 19L17.5 17.5" }, { r: "fade", d: 0.06 }],
    ["path", { d: "M15.5 15.5L14.5 14.5" }, { r: "fade", d: 0.12 }],
    ["path", { d: "M12.5 12.5L11.5 11.5" }, { r: "fade", d: 0.18 }],
    ["path", { d: "M9.5 9.5L8.5 8.5" }, { r: "fade", d: 0.24 }],
    ["path", { d: "M6.5 6.5L5 5" }, { r: "fade", d: 0.3 }],
  ],
});
