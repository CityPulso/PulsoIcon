import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "depth" (MIT, Copyright (c) 2021 Luca Burgio).
export const Depth = createIcon("Depth", "depth", {
  nodes: [
    ["path", { d: "M2 20L22 20" }],
    ["path", { d: "M5 4L19 4" }],
    ["path", { d: "M3 16.01L3.01 15.9989" }, { r: "fade", d: 0.0, o: [12, 12] }],
    ["path", { d: "M21.0098 16.01L20.9998 15.9989" }, { r: "fade", d: 0.05, o: [12, 12] }],
    ["path", { d: "M4 12.01L4.01 11.9989" }, { r: "fade", d: 0.1, o: [12, 12] }],
    ["path", { d: "M20.0098 12.01L19.9998 11.9989" }, { r: "fade", d: 0.15000000000000002, o: [12, 12] }],
    ["path", { d: "M5 8.01L5.01 7.99889" }, { r: "fade", d: 0.2, o: [12, 12] }],
    ["path", { d: "M19.0098 8.01L18.9998 7.99889" }, { r: "fade", d: 0.25, o: [12, 12] }],
    ["path", { d: "M12 7V17M12 7L10.5 8.5M12 7L13.5 8.5M12 17L9 14M12 17L15 14" }, { r: "grow", o: [12, 12] }],
  ],
});
